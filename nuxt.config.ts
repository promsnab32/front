// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  site: {
    url: 'http://213.226.124.210/',
  },
  sitemap: {
		urls: async (): Promise<any> => {
			const arr: any = []
      const response = await Promise.all([
        fetch(
          'http://213.226.124.210:1337/api/catalogs'
        ),
        fetch(
          'http://213.226.124.210:1337/api/categories'
        )
      ])
			const catalogs: any = await response[0].json()
      const categories = await response[1].json()
			catalogs.data.forEach((el: any) => {
				arr.push(`/category/${el.documentId}`)
			})
      categories.data.forEach((el: any) => {
				arr.push(`/products/${el.documentId}`)
			})

			return arr
		},
		sources: ['http://213.226.124.210/'],
	},
  app: {
    rootId: 'prom_snab',
    keepalive: true,
    head: {
      "meta": [
        {
          "name": "description",
          "content": "запчасти для железнодорожного промышленного транспорта"
        },
        {
          "name": "title",
          "content": "Запчасти для железнодорожного промышленного транспорта"
        },
        {
          "name": "keywords",
          "content": "запчасти, поезды, магазин"
        },
        {
          "name": "viewport",
          "content": "width=device-width, initial-scale=1"
        },
        {
          "charset": "utf-8"
        }
      ],
    }
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
          pass: 'gauvwhsdshsebddv',
        },
        requireTLS: true,
      },
    },
  ], '@nuxtjs/sitemap'],
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
    apiKey: process.env.NUXT_PRIVATE_KEY_FOR_STRAPI,
    public: {
      baseURL: process.env.NUXT_PUBLIC_BASE_URL,
    },
  }
})