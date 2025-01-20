<template>
  <div class="carousel">
    <div class="images">
      <div
        class="image"
        v-for="(image, index) in images"
        :key="index"
        :class="{ 'active-image': index === currentIndex }"
      >
        <img :src="image" alt="Undefined" />
      </div>
      <div class="switchers">
        <div class="prev" @click="prevSlide">
          <img src="/images/icons/prev-button.svg" alt="Previous" />
        </div>
        <div class="next" @click="nextSlide">
          <img src="/images/icons/next-button.svg" alt="Next" />
        </div>
      </div>
    </div>
    <div class="position-btns">
      <div
        class="position-btn"
        v-for="(image, index) in images"
        :key="index"
        :class="{ 'active-btn': index === currentIndex }"
        @click="goToSlide(index)"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
    autoPlay: {
      type: Boolean,
      default: false,
    },
    interval: {
      type: Number,
      default: 10000,
    },
  },
  data() {
    return {
      currentIndex: 0,
      intervalId: null,
    }
  },
  mounted() {
    this.updateHeight()
    window.addEventListener('resize', this.updateHeight)

    if (this.autoPlay) {
      this.startAutoPlay()
    }
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateHeight)
    this.stopAutoPlay()
  },
  methods: {
    updateHeight() {
      const imagesContainer = this.$el.querySelector('.images')
      const aspectRatio = 1200 / 350 // Или другой аспект в зависимости от изображений
      const containerWidth = imagesContainer.offsetWidth
      imagesContainer.style.height = `${containerWidth / aspectRatio}px`
    },
    startAutoPlay() {
      this.intervalId = setInterval(this.nextSlide, this.interval)
    },
    stopAutoPlay() {
      if (this.intervalId) {
        clearInterval(this.intervalId)
        this.intervalId = null
      }
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length
    },
    goToSlide(index) {
      this.currentIndex = index
    },
  },
  watch: {
    currentIndex(newIndex) {
      const imagesContainer = this.$el.querySelector('.images')
      const width = imagesContainer.offsetWidth
      imagesContainer.scrollTo({
        left: newIndex * width,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
}
.images {
  display: flex;
  max-height: 350px;
  overflow-x: hidden;
  scroll-behavior: smooth;
  border-radius: 10px;
}
.image {
  overflow: hidden;
  min-width: 100%;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
}
.image img {
  width: 100%;
  display: block;
}
.active-image {
  display: block;
  opacity: 1;
  overflow: hidden;
  position: relative;
}
.switchers {
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
}
.prev,
.next {
  cursor: pointer;
  padding: 0 5px;
}
.position-btns {
  display: flex;
  grid-gap: 10px;
  justify-content: center;
  margin-top: 10px;
}
.position-btn {
  width: 10px;
  height: 10px;
  background-color: var(--light-gray);
  border-radius: 50%;
  cursor: pointer;
}
.active-btn {
  font-weight: bold;
  background: linear-gradient(to right, var(--light-lime), var(--light-blue));
}
@media only screen and (max-width: 500px) {
  .switchers {
    top: 45%;
  }
  .prev img,
  .next img {
    width: 15px;
  }
}
</style>
