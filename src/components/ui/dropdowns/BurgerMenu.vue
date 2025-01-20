<script setup>
import LanguageSelector from '@/components/ui/dropdowns/LanguageSelector.vue'
import PrimaryButton from '@/components/ui/buttons/PrimaryButton.vue'
</script>
<template>
  <!-- material icons CDN in the head section, see the html settings 👆-->
  <div class="menu">
    <div class="menu-item">
      <PrimaryButton>{{ $t('header.authorization') }}</PrimaryButton>
    </div>
    <div class="menu-item">
      <PrimaryButton>{{ $t('header.registration') }}</PrimaryButton>
    </div>
    <div class="menu-item">
      <div class="lang-btn">
        <LanguageSelector />
      </div>
    </div>
  </div>
  <button class="hamburger" @click="toggleMenu">
    <i class="menu-icon">
      <img :src="'/images/icons/burger-menu-icon.svg'" alt="" />
    </i>
    <i class="close-icon">
      <img :src="'/images/icons/close-icon.svg'" alt="" />
    </i>
  </button>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      const menu = document.querySelector('.menu')
      const hamburger = document.querySelector('.hamburger')
      const closeIcon = document.querySelector('.close-icon')
      const menuIcon = document.querySelector('.menu-icon')

      if (menu.classList.contains('show-menu')) {
        menu.classList.remove('show-menu')
        closeIcon.style.display = 'none'
        menuIcon.style.display = 'block'
        hamburger.classList.remove('hamburger-open')
      } else {
        menu.classList.add('show-menu')
        closeIcon.style.display = 'block'
        menuIcon.style.display = 'none'
        hamburger.classList.add('hamburger-open')
      }
    },
  },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  padding: 200px 0px;
  background: var(--dark-background);
  transform: translateY(-100%);
  transition: transform 0.2s;
}

.menu-item {
  margin: auto;
  margin-top: 10px;
  width: 300px;
  height: 40px;
  display: block;
  color: white;
  text-decoration: none;
}
.lang-btn {
  display: flex;
  align-items: center;
  justify-content: center;
}

.hamburger {
  z-index: 100;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
}
.hamburger-open {
  position: fixed;
  z-index: 100;
  top: 0.75rem;
  right: 0.5rem;
}

.hamburger img {
  width: 50px;
}
.close-icon {
  display: none;
}

.show-menu {
  transform: translateY(0);
}
</style>
