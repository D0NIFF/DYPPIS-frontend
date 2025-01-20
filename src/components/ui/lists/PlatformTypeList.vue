<template>
  <div class="header-categories-list">
    <a
      v-for="platformType in platformTypes"
      :key="platformType.slug"
      :href="'/catalog/' + platformType.slug"
    >
      <!-- TODO: link dynamic get resources -->
      <!-- <img :src="`${apiUrl}/storage/uploads/images/icons/${platformType.image.file_name}`" :alt="platformType.title[getLang()]"> -->
      <img
        :src="`/images/icons/${platformType.image.file_name}`"
        :alt="platformType.title[getLang()]"
      />
      <p>{{ platformType.title[getLang()] }}</p>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    platformTypes: Array,
    apiUrl: String,
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
    updateCategories() {
      this.platformTypes.forEach((item) => {
        item.title = JSON.parse(item.title)
      })
    },
    getLang() {
      return localStorage.getItem('lang')
    },
  },
}
</script>

<style scoped>
.header-categories-list {
  display: flex;
  grid-gap: 1%;
  margin-top: 10px;
}
.header-categories-list a {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  flex-basis: 24.5%;
  height: 40px;
  max-height: 100%;
  border-radius: 5px;
  background-color: var(--dark-light-background);
  border: 2px solid transparent;
  transition: 0.2s ease-in-out;
}
.header-categories-list a img {
  width: 30px;
}
.header-categories-list a p {
  font-family: var(--default-font);
  font-weight: 600;
  font-size: 16px;
  color: white;
  margin-left: 5px;
}
.header-categories-list a:hover {
  border: 2px solid var(--light-lime);
}

@media only screen and (max-width: 950px) {
  .header-categories-list {
    grid-gap: 1%;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .header-categories-list a {
    flex-basis: 49.5%;
    margin-top: 5px;
    border: none;
  }
  .header-categories-list a:hover {
    border: none;
  }
  .header-categories-list img {
    width: 25px;
  }
  .header-categories-list p {
    font-size: 13px;
    margin-left: 2px;
    width: 70%;
  }
}
</style>
