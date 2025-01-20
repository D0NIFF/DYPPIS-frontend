<template>
  <div class="product-card">
    <div class="preview">
      <img :src="content.preview" alt="" />
    </div>
    <div class="title">
      <h2>{{ content.title }}</h2>
    </div>
    <div class="description">
      <h3>{{ content.description }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="css" scoped>
.product-card {
  flex-basis: 100%;
  min-height: 350px;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  background-color: var(--dark-light-background);
  border-radius: 10px;
  transition: 0.3s ease-in-out;
}
.product-card:hover {
  margin-top: -10px;
  transition: 0.3s ease-in-out;
}
.preview {
  width: 35%;
}
.preview img {
  width: 100%;
}
.title {
  margin-top: -50px;
  width: 100%;
  text-align: center;
}
.title h2 {
  font-family: var(--default-font);
  font-weight: 600;
  font-size: 24px;
  color: white;
}
.description {
  text-align: center;
  margin-top: -80px;
  padding: 0px 15px;
}
.description h3 {
  font-family: var(--default-font);
  font-weight: 500;
  font-size: 16px;
  color: var(--light-gray);
}
</style>
