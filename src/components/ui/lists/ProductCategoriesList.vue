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
        />
        <p>{{ category.title[getLang()] }}</p>
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
      itemsToShow: this.calculateItemsToShow(),
    };
  },
  computed: {
    visibleCategories() {
      return this.data.slice(this.currentIndex, this.currentIndex + this.itemsToShow);
    },
  },
  watch: {
    getLang: {
      handler() {
        this.updateCategories()
      },
      immediate: true,
    },
  },
  methods: {
    async fetchMoreData() {
      const response = await fetch(`${this.url}?perPage=${this.itemsPerPage}&page=${this.currentPage}`);
      const data = await response.json();
      return data.data;
    },
    next() {
      const container = this.$refs.carouselContainer;
      const scrollAmount = container.offsetWidth / this.itemsToShow;
      container.scrollLeft += scrollAmount;
      this.currentIndex++;
    },
    prev() {
      const container = this.$refs.carouselContainer;
      const scrollAmount = container.offsetWidth / this.itemsToShow;
      container.scrollLeft -= scrollAmount;
      this.currentIndex--;
    },
    calculateItemsToShow() {
      const containerWidth = window.innerWidth;
      return Math.floor(containerWidth / 200);
    },
    getLang() {
      return localStorage.getItem('lang') || 'en';
    },
    updateCategories() {
      // this.data.forEach((item) => {
      //   item.title = JSON.parse(item.title);
      // });s
    },
  },
  mounted() {
    window.addEventListener('resize', this.updateCategories);
    this.data.forEach((item) => {
      item.title = JSON.parse(item.title);
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateCategories);
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
.carousel-item img {
  width: 25px;
}
.carousel-button {
  cursor: pointer;
}
</style>
