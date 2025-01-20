<template>
  <a href="/" class="logo">
    <img src="/images/icons/logo.svg" alt="" />
    <p><slot>DYPPIS</slot></p>
  </a>
</template>

<style scoped>
.logo {
  display: flex;
  grid-gap: 10px;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
}
.logo img {
  width: 60px;
  height: 60px;
}
.logo p {
  font-family: 'Rubik Glitch', sans-serif;
  font-weight: 500;
  font-size: 2.5rem;
  background-image: linear-gradient(to right, var(--light-lime), var(--light-blue));
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
