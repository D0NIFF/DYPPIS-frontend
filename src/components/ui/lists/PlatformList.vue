<script setup>
import PrimaryButton from '@/components/ui/buttons/PrimaryButton.vue';
import { API_BASE_URL, BACKEND_URL } from '@/config.js'; // Import API URL
</script>

<template>
  <div class="card-list">
    <div class="platform-card" v-for="card in updatedData" :key="card.id">
      <a :href="'/catalog/' + $route.params.type + '/' + card.slug" class="card">
        <div class="preview">
          <img :src="`${BACKEND_URL}${card.image.category.url}/${card.image.file_name}`" alt="" />
        </div>
        <div class="title">
          <p>{{ card.title }}</p>
        </div>
      </a>
    </div>
  </div>
  <div class="load-more" v-if="isLoadMore">
    <PrimaryButton @click="loadMore">{{ $t('button.see-more') }}</PrimaryButton>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: false,
      default: () => []
    },
    isLoadMore: {
      type: Boolean,
      default: false,
    },
    url: {
      type: String,
      required: false,
      default: `${API_BASE_URL}/platform-types/software/platforms`
    }
  },
  data() {
    return {
      updatedData: this.getUpdatedData(),
      currentPage: 1,
      itemsPerPage: 10,
      hasMore: true,
    };
  },
  methods: {
    getLang() {
      return localStorage.getItem('lang') || 'en';
    },
    getUpdatedData() {
      return this.data.map((item) => item).slice(0, this.currentPage * this.itemsPerPage);
    },
    updateData() {
      this.updatedData = this.getUpdatedData();
    },
    async loadMore() {
      const newData = await this.fetchMoreData();
      // eslint-disable-next-line vue/no-mutating-props
      this.data.push(...newData);
      this.currentPage++;
      this.updateData();
      this.hasMore = newData.length > 0;
    },
    async fetchMoreData() {
      const response = await fetch(`${this.url}?perPage=${this.itemsPerPage}&page=${this.currentPage}`);
      const data = await response.json();
      return data.data;
    },
  },
  watch: {
    '$i18n.locale': {
      handler() {
        this.updateData();
      },
      immediate: true,
    },
  },
  mounted() {
    if (this.data.length === 0) {
      this.loadMore();
    }
  },
};
</script>

<style scoped>
.card-list {
  width: 100%;
  display: flex;
  flex-flow: wrap;
  grid-gap: 10px;
  justify-content: center;
}

.card {
  width: 144px;
  height: 150px;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 3px solid transparent;
  border-radius: 5px;
  background-image: linear-gradient(var(--dark-light-background), var(--dark-light-background)),
    linear-gradient(to right, var(--light-lime), var(--light-blue));
  background-origin: border-box;
  background-clip: content-box, border-box, padding-box;
  text-decoration: none;
  transition: 0.1s ease-in-out;
}
.card:hover {
  margin-top: -10px;
}
.preview {
  width: 40%;
  margin-top: 5px;
}
.preview img {
  width: 100%;
}
.title {
  width: 100%;
  color: white;
  text-align: center;
  font-family: var(--default-font);
  font-weight: 600;
  font-size: 18px;
}
.load-more {
  width: 300px;
  height: 45px;
  margin: 20px auto;
}
</style>
