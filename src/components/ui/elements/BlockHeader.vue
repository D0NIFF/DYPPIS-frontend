<template>
  <div class="block-head">
    <img :src="image" alt="" />
    <p><slot>Title</slot></p>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: '/images/icons/recommendations-icon.svg',
    },
  },
}
</script>

<style scoped>
.block-head {
  display: flex;
  align-items: center;
}
.block-head p {
  font-family: var(--default-font);
  font-weight: 700;
  font-size: 24px;
  color: white;
  margin-left: 5px;
}
</style>
