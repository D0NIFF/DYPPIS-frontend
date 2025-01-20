import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { languages, defaultLocale } from '@/i18n/index'
import { createI18n, useI18n } from 'vue-i18n'

const urlParams = new URLSearchParams(window.location.search)
let lang = urlParams.get('lang') || localStorage.getItem('lang') || 'en'
if (!['en', 'es', 'de', 'fr', 'it', 'ru'].includes(lang)) {
  lang = 'en'
}
localStorage.setItem('lang', lang)

const messages = Object.assign(languages)
const i18n = createI18n({
  legacy: false,
  locale: lang,
  fallbackLocale: 'en',
  messages,
})

router.beforeEach((to, from, next) => {
  let lang = to.query.lang || localStorage.getItem('lang') || 'en'
  if (!['en', 'es', 'de', 'fr', 'it', 'ru'].includes(lang)) {
    lang = 'en'
  }
  if (i18n.locale !== lang) {
    i18n.locale = lang
    localStorage.setItem('lang', lang)
  }
  next()
})

const app = createApp(App)

app.use(createPinia())
app.use(i18n)
app.use(router)

app.mount('#app')
