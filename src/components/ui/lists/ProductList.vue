<script setup>
import PrimaryButton from '@/components/ui/buttons/PrimaryButton.vue'
import ProductCard from '@/components/ui/cards/ProductCard.vue'
</script>
<template>
  <div class="products-list">
    <div class="product-item" v-for="product in localProducts">
      <ProductCard :product="product"></ProductCard>
    </div>
    <div class="see-more">
      <slot>
        <PrimaryButton @click="parseProducts">{{ $t('button.see-more') }}</PrimaryButton>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPageIndex: 1,
      localProducts: [],
      //apiUrl: process.env.VUE_APP_API_URL,
    }
  },
  mounted() {
    //this.parseProducts();
    for (let i = 0; i < 30; i++) {
      const product = {
        id: 'dc653f31-52eb-315b-80e9-d2923530f4e6',
        title: 'Private account with many games - Fortnite, GTA 5, CS 2',
        description:
          'Officia qui corporis quos. Non repellendus ipsum dolorem sed. Consequuntur provident porro cumque sit quis.',
        price: 7777,
        old_price: 2899,
        discount: null,
        seller: null,
        platform: {
          slug: 'steam',
          title: 'Steam',
          image_id: null,
          banner_id: null,
        },
        category: {
          slug: 'account',
          title: {
            de: 'Konto',
            en: 'Account',
            es: 'Cuenta',
            fr: 'Compte',
            it: 'Conto',
            ru: 'Аккаунт',
          },
          image_id: null,
          is_public: true,
        },
        delivery: {
          id: '6a6003d2-cc8d-4448-864a-853168e415b8',
          title: {
            de: 'Vollständiger Zugang',
            en: 'Full access',
            es: 'Cuenta',
            fr: 'Compte',
            it: 'Accesso completo',
            ru: 'Аккаунт',
          },
          description: {
            de: 'Konto',
            en: 'Full access to the account',
            es: 'Cuenta',
            fr: 'Compte',
            it: 'Accesso completo al conto',
            ru: 'Аккаунт',
          },
        },
      }

      this.localProducts.push(product)
    }
  },
  props: {
    filters: {
      type: String,
      required: false,
    },
  },
  methods: {
    async parseProducts() {
      try {
        const response = await fetch(this.apiUrl + '/api/v1/products', {
          method: 'GET',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        const json = await response.json()
        this.addProducts(json.data)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    },
    addProducts(products) {
      if (products && products.items) {
        for (let i = 0; i < products.items.length; i++) {
          this.localProducts.push(products.items[i])
        }
      } else {
        console.error('Products data is invalid or items are undefined:', products)
      }
    },
  },
}
</script>

<style lang="css" scoped>
.products-list {
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  background-color: var(--dark-background);
}
.product-item {
  flex-basis: 14%;
  margin-top: 10px;
  border-radius: 5px;
  background-color: var(--dark-light-background);
  transition: 0.3s ease-in-out;
}
.product-item:hover {
  transition: 0.3s ease-in-out;
  transform: scale(1.1);
}
.see-more {
  margin-top: 20px;
  padding: 0 100px;
  min-width: 200px;
  height: 45px;
}
</style>
