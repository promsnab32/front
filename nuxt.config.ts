// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/scss/main.scss'],
  modules: ['vue-yandex-maps/nuxt'],
  yandexMaps: {
    apikey: '31d1f52d-d373-4258-a82e-5731c2ec14e4',
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_BASE_URL || '',
    }
  }
})
