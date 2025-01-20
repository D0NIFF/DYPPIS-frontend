<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n({ useScope: 'global' })
import Header from '@/components/layouts/Header.vue'
import Footer from '@/components/layouts/Footer.vue'
</script>

<template>
  <Header />
  <div class="content">
    <RouterView />
  </div>
  <Footer />
</template>

<style scoped>
.container {
  width: 100%;
  min-height: 100vh;
  margin-top: 200px;
  background-color: var(--dark-background);
}

.container {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

@media only screen and (max-width: 950px) {
  .content {
    padding: 0 10px;
  }
}
@media only screen and (max-width: 500px) {
  .container {
    margin-top: 260px;
  }
}
</style>
