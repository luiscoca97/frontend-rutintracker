// https://nuxt.com/docs/api/configuration/nuxt-config

// Nuxt config file
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  build: { transpile: ['@fortawesome/vue-fontawesome'] },
  modules: ['vuetify-nuxt-module', '@pinia/nuxt'],
  plugins: ['~/plugins/fontawesome.js'],
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],
  routeRules: {
    '/': { prerender: true },
  },
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: './vuetify.config.ts',
  },
})
