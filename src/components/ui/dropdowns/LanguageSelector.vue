<template>
  <div class="language-selector">
    <div class="dropdown" @click="toggleDropdown">
      <img
        :src="`/images/flags/flag-${selectedLang}.svg`"
        :alt="languages[selectedLang]"
        class="flag"
      />
      {{ languages[selectedLang] }}
    </div>
    <div v-if="dropdownOpen" class="dropdown-menu">
      <div
        v-for="(lang, code) in filteredLanguages"
        :key="code"
        @click="changeLanguage(code)"
        class="dropdown-item"
      >
        <img :src="`/images/flags/flag-${code}.svg`" :alt="lang" class="flag"/> {{ lang }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LanguageSelector',
  data() {
    return {
      dropdownOpen: false,
      selectedLang: localStorage.getItem('lang') || 'en',
      languages: {
        en: 'EN',
        es: 'ES',
        de: 'DE',
        fr: 'FR',
        it: 'IT',
        ru: 'RU',
      },
    }
  },
  computed: {
    filteredLanguages() {
      const { selectedLang, languages } = this;
      return Object.fromEntries(
        Object.entries(languages).filter(([code]) => code !== selectedLang)
      );
    },
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen
    },
    changeLanguage(lang) {
      if (!['en', 'es', 'de', 'fr', 'it', 'ru'].includes(lang)) {
        this.$i18n.locale = 'en' // fallback to English if lang not valid
      } else {
        this.$i18n.locale = lang
      }
      localStorage.setItem('lang', this.$i18n.locale)
      this.selectedLang = lang
      this.removeLangParam()
      this.dropdownOpen = false
    },
    removeLangParam() {
      const url = new URL(window.location.href)
      url.searchParams.delete('lang')
      window.history.replaceState({}, document.title, url.toString())
    },
  },
}
</script>

<style>
.language-selector {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.dropdown {
  padding: 10px;
  color: white;
  display: flex;
  align-items: center;
  background-color: var(--dark-light-background);
  border-radius: 5px;
  font-family: var(--default-font);
  font-weight: 600;
}

.dropdown .flag {
  width: 40px;
  height: 25px;
  margin-right: 10px;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: var(--dark-light-background);
  color: white;
  border: 2px solid var(--dark-light-background);
  border-radius: 5px;
  margin: 0;
  padding: 0;
  list-style: none;
  z-index: 1;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  font-size: 14px;
}

.dropdown-item {
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-family: var(--default-font);
}

.dropdown-item:hover {
  background-color: var(--dark-light-background-hover);
}

.dropdown-item .flag {
  width: 40px;
  height: 25px;
  margin-right: 10px;
}
</style>
