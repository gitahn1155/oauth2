import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
      axios: {
        baseURL: '',
      },
      privateRuntimeConfig: {
        axios: {
          baseURL: process.env.BASE_URL
        }
      },
      css: [
        '@/assets/css/main.css',
        '@/assets/fonts/fonts.css'
      ],
      plugins: [

      ],
      modules: [
        '@nuxtjs/dayjs',
        '@nuxt/image-edge',
      ],
      image: {
        // Options
      },
      build: {  
        postcss: {
          postcssOptions: require("./postcss.config.js"),
        },  
        transpile: [
          '@heroicons/vue',
          '@nuxtjs/feed',
          '@nuxtjs/robots',
          '@nuxtjs/sitemap',
          '@nuxtjs/axios',
        ]
      },
})
