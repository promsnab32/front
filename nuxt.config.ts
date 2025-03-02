// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/Aura';
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    keepalive: true
   },
  css: ['~/assets/scss/main.scss','swiper/swiper-bundle.css'],
  modules: ['@pinia/nuxt', 'vue-yandex-maps/nuxt', '@vee-validate/nuxt', 'nuxt-swiper', '@primevue/nuxt-module', [
    'nuxt-mail',
    {
      message: {
        to: 'd.kireenkov@yandex.ru',
      },
      smtp: {
        service: 'yandex.ru',
        host: 'smtp.yandex.ru',
        port: 465,
        secure: true,
        auth: {
          user: 'd.kireenkov32rus@yandex.ru',
          pass: 'xxgwkqvknizrpqim',
        },
        requireTLS: true,
      },
    },
  ],
],
  yandexMaps: {
    apikey: '31d1f52d-d373-4258-a82e-5731c2ec14e4',
  },
  primevue: {
    components: {
        prefix: 'Prime',
        include: ['Paginator ']    /* Used as <PrimeButton /> and <PrimeDataTable /> */
    },
    options: {
      theme: {
          preset: Aura
      }
    }
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_BASE_URL || 'http://213.226.124.210:1337/api',
    },
  }
})