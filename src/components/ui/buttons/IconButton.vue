<template>
  <button>
    <img :src="src" :alt="alt" @click="onclick" />
  </button>
</template>

<script>
export default {
  props: {
    // Path to icon file
    src: {
      type: String,
      required: false,
    },
    // Alternative text
    alt: {
      type: String,
      required: false,
    },
    /* Function by click */
    onclick: {
      type: Function,
      required: false,
    },
  },
}
</script>

<style scoped>
button {
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}
button img {
  width: 100%;
  transition: 0.1s;
}
button img:hover {
  transition: 0.1s;
  transform: scale(1.05);
}
</style>
