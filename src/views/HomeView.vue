<script setup>
import Carousel from '@/components/ui/media/Carousel.vue'
import PlatformList from '@/components/ui/lists/PlatformList.vue'
import ProductList from '@/components/ui/lists/ProductList.vue'
import InfoCardList from '@/components/ui/lists/InfoCardList.vue'
import BlockHeader from '@/components/ui/elements/BlockHeader.vue'
</script>

<template>
  <div class="banner-carousel">
    <Carousel :images="images" :autoPlay="true"></Carousel>
  </div>
  <div class="platforms-list">
    <PlatformList :data="platformCards" />
  </div>
  <div class="products-head">
    <BlockHeader :image="'/images/icons/recommendations-icon.svg'">
      {{ $t('home.recommendations') }}
    </BlockHeader>
  </div>
  <div class="products-list">
    <ProductList />
  </div>

  <div class="info-cards-head">
    <BlockHeader :image="'/images/icons/cup-icon.svg'">
      {{ $t('home.advantages') }}
    </BlockHeader>
  </div>
  <div class="info-cards-list">
    <InfoCardList :data="advantagesCards" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      platformTypes: [],
      images: [ // TODO: Here should be the banners from API request
        '/images/banners/preview1.jpg',
        '/images/banners/preview2.jpg',
        '/images/banners/preview3.jpg',
        '/images/banners/preview4.jpeg',
        '/images/banners/banner1.jpg',
      ],
      platformCards: [], // TODO: Here should be API request
      advantagesCards: this.getAdvantagesCards(),
    }
  },
  methods: {
    getLang() {
      return localStorage.getItem('lang')
    },
    getAdvantagesCards() {
      return [
        {
          preview: '/images/icons/support-preview.svg',
          title: this.$t('home.advantages-list.support.title'),
          description: this.$t('home.advantages-list.support.description'),
        },
        {
          preview: '/images/icons/security-preview.svg',
          title: this.$t('home.advantages-list.security.title'),
          description: this.$t('home.advantages-list.security.description'),
        },
        {
          preview: '/images/icons/payment-preview.svg',
          title: this.$t('home.advantages-list.payment.title'),
          description: this.$t('home.advantages-list.payment.description'),
        },
      ]
    },
  },
  watch: {
    '$i18n.locale': {
      handler() {
        this.advantagesCards = this.getAdvantagesCards()
      },
      immediate: true,
    },
  },
}
</script>

<style scoped>
.banner-carousel {
  width: 100%;
}
.platforms-list {
  margin-top: 50px;
}
.products-head {
  margin-top: 50px;
}
</style>
