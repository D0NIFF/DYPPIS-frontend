<script setup>
import LetterList from '@/components/ui/lists/LetterList.vue';
import PlatformList from '@/components/ui/lists/PlatformList.vue';
import { API_BASE_URL } from '@/config.js'; // Import API URL
</script>
<template>
  <div class="letters-block">
    <LetterList></LetterList>
  </div>
  <div class="cards-block">
    <PlatformList :url="`${API_BASE_URL}/platform-types/software/platforms`" :isLoadMore="true" />
  </div>
</template>

<script>
export default {
}
</script>

<style>
.cards-block {
  margin-top: 20px;
}
</style>
