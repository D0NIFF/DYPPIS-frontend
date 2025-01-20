<script setup>
import { BACKEND_URL } from '@/config.js'; // Import BACKEND URL
</script>
<template>
  <a :href="'/products/' + product.url" class="product">
    <div class="preview">
      <!-- TODO: Check -->
      <!-- <img :src="apiUrl + '/storage/uploads/images/products/product-preview.jpg'" alt=""> -->
      <img :src="`${BACKEND_URL}${product.images[0].category.url}/${product.images[0].file_name}`" v-if="product.images"/>
      <img :src="'/images/products/product-preview.jpg'" alt="" v-else/>
    </div>
    <div class="title">
      <p>{{ product.title }}</p>
    </div>
    <div class="details">
      <div class="detail-item">
        <img :src="`${BACKEND_URL}${product.platform.image.category.url}/${product.platform.image.file_name}`" v-if="product.platform.image"/>
        <img :src="'/images/platforms/default.svg'" v-else/>
        <p>{{ product.platform.title }}</p>
      </div>
    </div>
    <div class="buy-block">
      <p class="current-price">{{ Math.ceil(product.price) }}₽</p>
      <sub v-if="product.old_price != null"
        ><p class="old-price">{{ product.old_price }}₽</p></sub
      >
      <div v-if="product.old_price != null" class="discount">
        <p>{{ calculateDiscount(product.price, product.old_price) }}%</p>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
    }
  },
  methods: {
    calculateDiscount(price, oldPrice) {
      if (oldPrice <= 0) {
        throw new Error('Old price must be greater than zero');
      }
      const discount = ((oldPrice - price) / oldPrice) * 100;
      return Math.round(discount);
    }
  },
}
</script>

<style lang="css" scoped>
* {
  font-family: var(--default-font);
}

/* -------------------- PRODUCT CARD STYLES ------------- */
.product {
  font-family: var(--default-font);
  flex-basis: 100%;
  background-color: var(--dark-light-background);
  border-radius: 5px;
  transition: 0.3s;
  text-decoration: none;
  cursor: pointer;
  margin-top: 10px;
}
.product:hover {
  transform: scale(1.1);
  transition: 0.3s;
}
.preview {
  width: 100%;
  height: 105px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.preview img {
  height: 100%;
  border-radius: 5px;
}
.title {
  padding: 0px 7px;
  color: white;
  overflow: hidden;
  font-family: var(--default-font);
  font-size: 16px;
  font-weight: 600;
  margin-top: 9px;
  height: 60px;
}
.details {
  display: flex;
  grid-gap: 5px;
  margin-left: 7px;
  margin-right: 7px;
  padding: 6px 0px;
  margin-top: 5px;
  border-top: 1.5px solid var(--dark-gray);
  border-bottom: 1.5px solid var(--dark-gray);
}
.details img {
  width: 22px;
  border-radius: 3px;
}
.details .detail-item {
  display: flex;
  align-items: center;
  grid-gap: 5px;
  color: white;
  font-family: var(--default-font);
  font-weight: 500;
  font-size: 14px;
  width: 100%;
  overflow: hidden;
}
.details .rating {
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 5px;
  margin-left: auto;
  color: white;
  font-weight: 600;
}
.buy-block {
  display: flex;
  padding: 5px 7px;
  grid-gap: 3px;
  margin-bottom: 5px;
  justify-content: center;
}
.buy-block .current-price {
  height: 25px;
  font-weight: 800;
  font-size: 16px;
  color: transparent;
  background-image: linear-gradient(to right, var(--light-lime), var(--light-blue));
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;
}
.buy-block .old-price {
  font-weight: 500;
  font-size: 11px;
  color: var(--dark-gray);
  text-decoration: line-through;
  margin-top: 3px;
}
.buy-block .discount {
  margin-left: auto;
  width: 50px;
  background: linear-gradient(to right, var(--light-lime), var(--light-blue));
  color: var(--dark-background);
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
}
@media only screen and (max-width: 500px) {
  /*.products-list .preview { height: 180px }*/
  .preview {
    height: 87px;
  }
  .product {
    flex-basis: 48%;
  }

  .title {
    font-size: 12.3px;
  }
  .buy-block .current-price {
    font-size: 12.3px;
    white-space: nowrap;
  }
  .buy-block .old-price {
    font-size: 9.5px;
  }
}
</style>
