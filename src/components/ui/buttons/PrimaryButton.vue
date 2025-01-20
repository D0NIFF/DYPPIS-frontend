<template>
  <button @click="onclick"><slot>Click me</slot></button>
</template>

<script>
export default {
  props: {
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
  border-radius: 3px;
  background-color: transparent;
  border: none;
  outline: none;
  background: linear-gradient(to right, var(--light-lime), var(--light-blue));
  transition: 0.2s ease-in-out;

  font-family: var(--default-font);
  font-weight: 600;
  font-size: 16px;
  color: var(--dark-background);
  cursor: pointer;
}
button:hover {
  transition: 0.2s ease-in-out;
  box-shadow: 0 0 10px var(--light-lime);
}
</style>
