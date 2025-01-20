<template>
  <div class="input">
    <input type="text" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      required: false,
    },
  },
}
</script>

<style>
.input input {
  width: 100%;
  height: 45px;
  outline: none;
  text-indent: 15px;
  font-weight: 500;
  font-size: 14px;
  color: white;
  background-color: transparent;
  border: 3px solid transparent;
  border-radius: 5px;
  background-image: linear-gradient(var(--dark-background), var(--dark-background)),
    linear-gradient(to right, var(--light-lime), var(--light-blue));
  background-origin: border-box;
  background-clip: content-box, border-box, padding-box;
}
.input input:focus {
  background-image: linear-gradient(white, white),
    linear-gradient(to right, var(--light-lime), var(--light-blue));
  background-color: white;
  color: var(--light-lime);
}
</style>
