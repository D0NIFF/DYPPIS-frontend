<script setup>
import SearchInput from '@/components/ui/inputs/SearchInput.vue'
import IconButton from '@/components/ui/buttons/IconButton.vue'
</script>

<template>
  <div class="search">
    <div class="search-input">
      <SearchInput :placeholder="$t('header.search')"></SearchInput>
    </div>
    <div class="search-btn">
      <IconButton :src="'/images/icons/search-icon.svg'"></IconButton>
    </div>
  </div>
</template>

<style scoped>
.search {
  width: 100%;
  display: flex;
}
.search-input {
  width: 95%;
}
.search-btn {
  width: 50px;
  height: 50px;
  margin-left: -42px;
  margin-top: 3px;
}
</style>
