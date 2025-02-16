// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss','swiper/swiper-bundle.css'],
  modules: ['vue-yandex-maps/nuxt','@vee-validate/nuxt', 'nuxt-swiper'],
  yandexMaps: {
    apikey: '31d1f52d-d373-4258-a82e-5731c2ec14e4',
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_BASE_URL || 'http://localhost:1337/api',
    }
  }
})
