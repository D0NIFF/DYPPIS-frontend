<script setup>
import Logo from '@/components/ui/elements/Logo.vue'
import SearchForm from '@/components/ui/forms/SearchForm.vue'
import LanguageSelector from '@/components/ui/dropdowns/LanguageSelector.vue'
import PrimaryButton from '@/components/ui/buttons/PrimaryButton.vue'
import PlatformTypeList from '@/components/ui/lists/PlatformTypeList.vue'
import BurgerMenu from '@/components/ui/dropdowns/BurgerMenu.vue'
</script>
<template>
  <header>
    <div class="top-block">
      <div class="logo-block">
        <div class="logo-item">
          <Logo />
        </div>
        <div class="burger-menu">
          <BurgerMenu />
        </div>
      </div>
      <nav>
        <div class="search-block">
          <SearchForm />
        </div>
        <div class="login-block">
          <LanguageSelector />
          <div class="login-btn">
            <PrimaryButton>{{ $t('header.login') }}</PrimaryButton>
          </div>
        </div>
      </nav>
    </div>
    <div class="bottom-block">
      <PlatformTypeList :platformTypes="this.platformTypes" />
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      platformTypes: [],
      //apiUrl: process.env.VUE_APP_API_URL,
      isMenuOpen: false,
    }
  },
  methods: {
    async getPlatformTypes() {
      /* TODO: Tepmp linking files */
      // try {
      //   const response = await fetch(this.apiUrl + '/api/v1/platform-types', { method: "GET" });
      //   if (!response.ok) throw new Error('Network response was not ok');
      //   const text = await response.text();
      //   const json = JSON.parse(text);
      //   this.platformTypes = json.data;
      //   this.platformTypes.forEach(item => { item.title = JSON.parse(item.title); });
      // } catch (error) {
      //   console.error('There has been a problem with your fetch operation:', error);
      // }
      const response = await fetch('/data/platform-types.json')
      if (!response.ok) throw new Error('Failed to load platform types')
      const data = await response.text()
      const json = JSON.parse(data)
      this.platformTypes = json.data
      this.platformTypes.forEach((item) => {
        item.title = JSON.parse(item.title)
      })
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    login() {
      // Login logic
    },
    register() {
      // Register login
    },
  },
  watch: {
    '$i18n.locale': {
      handler() {
        this.getPlatformTypes()
      },
      immediate: true,
    },
  },
  mounted() {
    this.getPlatformTypes()
  },
}
</script>

<style scoped>
header {
  width: 100%;
  margin-bottom: 20px;
}
.top-block {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--light-blue);
}
.top-block nav {
  display: flex;
  flex-basis: 75%;
}
.search-block {
  flex-basis: 70%;
}
.login-block {
  flex-basis: 30%;
  display: flex;
  align-items: center;
  justify-content: end;
  grid-gap: 10px;
}
.login-block .login-btn {
  width: 100px;
  height: 40px;
}
.bottom-block {
  width: 100%;
  height: 50px;
}
.burger-menu {
  display: none;
}

@media only screen and (max-width: 950px) {
  header {
    padding: 0 10px;
  }
  .top-block {
    flex-flow: wrap;
    height: 150px;
  }
  .burger-menu {
    display: block;
  }
  .logo-block {
    flex-basis: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .top-block nav,
  .search-block {
    flex-basis: 100%;
  }
  .login-block {
    display: none;
  }
  .bottom-block {
    height: 100px;
  }
}
</style>
