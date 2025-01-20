<template>
  <div class="carousel">
    <button @click="prev" class="carousel-button">←</button>
    <div class="carousel-container" ref="carouselContainer">
      <a
        v-for="category in visibleCategories"
        :key="category.slug"
        :href="'/catalog/' + category.slug"
        class="carousel-item"
      >
        <img
          :src="`${category.image.category.url}/${category.image.file_name}`"
          :alt="category.title[currentLang]"
        />
        <p>{{ category.title[currentLang] }}</p>
      </a>
    </div>
    <button @click="next" class="carousel-button">→</button>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentIndex: 0,
      itemsToShow: this.calculateItemsToShow(), // Вычисляем количество элементов
      currentLang: this.getLang(), // Текущий язык
    };
  },
  computed: {
    visibleCategories() {
      return this.data.slice(this.currentIndex, this.currentIndex + this.itemsToShow);
    },
  },
  watch: {
    currentLang(newLang, oldLang) {
      if (newLang !== oldLang) {
        this.updateCategories();
      }
    },
  },
  methods: {
    next() {
      const container = this.$refs.carouselContainer;
      const scrollAmount = container.offsetWidth / this.itemsToShow;
      container.scrollLeft += scrollAmount;
    },
    prev() {
      const container = this.$refs.carouselContainer;
      const scrollAmount = container.offsetWidth / this.itemsToShow;
      container.scrollLeft -= scrollAmount;
    },
    handleScroll(event) {
      const container = this.$refs.carouselContainer;
      const scrollAmount = container.offsetWidth / this.itemsToShow;
      if (event.deltaY > 0) {
        container.scrollLeft += scrollAmount;
      } else {
        container.scrollLeft -= scrollAmount;
      }
      event.preventDefault();
    },
    calculateItemsToShow() {
      const containerWidth = window.innerWidth;
      return Math.floor(containerWidth / 200); // Предполагаемая ширина одного элемента - 200px
    },
    updateCategories() {
      this.data.forEach((item) => {
        item.title = JSON.parse(item.title);
      });
    },
    getLang() {
      return localStorage.getItem('lang');
    },
    updateItemsToShow() {
      this.itemsToShow = this.calculateItemsToShow();
    },
  },
  mounted() {
    window.addEventListener('resize', this.updateItemsToShow);
    this.updateItemsToShow();
    this.$watch(
      () => localStorage.getItem('lang'),
      (newLang) => {
        this.currentLang = newLang;
      }
    );
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateItemsToShow);
  },
};
</script>

<style scoped>
.carousel {
  display: flex;
  align-items: center;
}
.carousel-container {
  display: flex;
  gap: 10px;
  overflow-x: scroll;
  width: 100%;
  scroll-behavior: smooth;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
}
.carousel-container::-webkit-scrollbar {
  display: none; /* WebKit */
}
.carousel-item {
  flex: 0 0 200px; /* Устанавливаем фиксированную ширину для элементов */
  padding: 10px 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  background-color: var(--dark-light-background);
  font-family: var(--default-font);
  font-size: 14px;
  font-weight: 600;
  color: white;
}
.carousel-item img { width: 25px; }
.carousel-button {
  cursor: pointer;
}
</style>
