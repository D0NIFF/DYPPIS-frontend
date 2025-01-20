<script setup>
import ProductCategoriesList from '@/components/ui/lists/ProductCategoriesList.vue';
</script>
<template>
  <div class="preview-block">
    <!-- TODO: Replace to API -->
    <img :src="'/images/banners/forza-horizon-4-banner.jpg'" alt="">
  </div>

  <div class="categories-block">
    <!-- TODO: Replace to API -->
    <ProductCategoriesList :data="productCategories"/>
  </div>
  <div class="title-block">
    <!-- TODO: Replace to API -->
     <div class="info">
      <img :src="'/images/platforms/epic-games-logo.svg'" alt="">
      <p>Forza Horizen V</p>
     </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      productCategories: [
        {
          slug: "account",
          title: "{\"de\": \"Mobile Spiele\", \"en\": \"Mobile games\", \"es\": \"Juegos para móviles\", \"fr\": \"Jeux mobiles\", \"it\": \"Giochi per cellulari\", \"ru\": \"Мобильные игры\"}",
          image: {
            id: 46236,
            file_name: "accounts-icon.svg",
            file_type: "image/svg",
            file_size: 2096,
            category: {
              url: "/images/icons"
            },
            created_at: null,
            updated_at: null
          }
        },
        {
          slug: "key",
          title: "{\"de\": \"Mobile Spiele\", \"en\": \"Mobile games\", \"es\": \"Juegos para móviles\", \"fr\": \"Jeux mobiles\", \"it\": \"Giochi per cellulari\", \"ru\": \"Мобильные игры\"}",
          image: {
            id: 46236,
            file_name: "keys-icon.svg",
            file_type: "image/svg",
            file_size: 2096,
            category: {
              url: "/images/icons"
            },
            created_at: null,
            updated_at: null
          },
        },
        {
          slug: "gift",
          title: "{\"de\": \"Mobile Spiele\", \"en\": \"Mobile games\", \"es\": \"Juegos para móviles\", \"fr\": \"Jeux mobiles\", \"it\": \"Giochi per cellulari\", \"ru\": \"Мобильные игры\"}",
          image: {
            id: 46236,
            file_name: "games-icon.svg",
            file_type: "image/svg",
            file_size: 2096,
            category: {
              url: "/images/icons"
            },
            created_at: null,
            updated_at: null
          }
        },
        {
          slug: "test",
          title: "{\"de\": \"Mobile Spiele\", \"en\": \"Mobile games\", \"es\": \"Juegos para móviles\", \"fr\": \"Jeux mobiles\", \"it\": \"Giochi per cellulari\", \"ru\": \"Мобильные игры\"}",
          image: {
            id: 46236,
            file_name: "games-icon.svg",
            file_type: "image/svg",
            file_size: 2096,
            category: {
              url: "/images/icons"
            },
            created_at: null,
            updated_at: null
          }
        },
        {
          slug: "test2",
          title: "{\"de\": \"Mobile Spiele\", \"en\": \"Mobile games\", \"es\": \"Juegos para móviles\", \"fr\": \"Jeux mobiles\", \"it\": \"Giochi per cellulari\", \"ru\": \"Мобильные игры\"}",
          image: {
            id: 46236,
            file_name: "games-icon.svg",
            file_type: "image/svg",
            file_size: 2096,
            category: {
              url: "/images/icons"
            },
            created_at: null,
            updated_at: null
          }
        },
        {
          slug: "test3",
          title: "{\"de\": \"Mobile Spiele\", \"en\": \"Mobile games\", \"es\": \"Juegos para móviles\", \"fr\": \"Jeux mobiles\", \"it\": \"Giochi per cellulari\", \"ru\": \"Мобильные игры\"}",
          image: {
            id: 46236,
            file_name: "games-icon.svg",
            file_type: "image/svg",
            file_size: 2096,
            category: {
              url: "/images/icons"
            },
            created_at: null,
            updated_at: null
          }
        },
        {
          slug: "test4",
          title: "{\"de\": \"Mobile Spiele\", \"en\": \"Mobile games\", \"es\": \"Juegos para móviles\", \"fr\": \"Jeux mobiles\", \"it\": \"Giochi per cellulari\", \"ru\": \"Мобильные игры\"}",
          image: {
            id: 46236,
            file_name: "games-icon.svg",
            file_type: "image/svg",
            file_size: 2096,
            category: {
              url: "/images/icons"
            },
            created_at: null,
            updated_at: null
          }
        }
      ]
    }
  },
}
</script>

<style>
.preview-block {
  margin-top: 20px;
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 5px;
}
.preview-block img {width: 100%;}

.categories-block {
  margin-top: 20px;
}
.title-block {
  display: flex;
  padding: 10px 0;
}

.title-block .info {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--default-font);
  font-weight: 600;
  font-size: 22px;
  color: white;
  gap: 5px;
}
.title-block .info img { width: 60px; }
</style>
