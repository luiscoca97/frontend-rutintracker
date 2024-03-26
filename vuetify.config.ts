// vuetify.config.ts
import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'

const configFile = require('./config/colours.json')
const config = configFile.theme

const theme = {
  primary: {
    darken2: config.primario.darken2,
    darken1: config.primario.darken1,
    base: config.primario.base,
    lighten1: config.primario.lighten1,
    lighten2: config.primario.lighten2,
  },
  secondary: {
    darken2: config.secundario.darken2,
    darken1: config.secundario.darken1,
    base: config.secundario.base,
    lighten1: config.secundario.lighten1,
    lighten2: config.secundario.lighten2,
  },
  alternative: {
    darken2: config.alternativo.darken2,
    darken1: config.alternativo.darken1,
    base: config.alternativo.base,
    lighten1: config.alternativo.lighten1,
    lighten2: config.alternativo.lighten2,
  },
  positive: {
    darken2: config.positivo.darken2,
    darken1: config.positivo.darken1,
    base: config.positivo.base,
    lighten1: config.positivo.lighten1,
    lighten2: config.positivo.lighten2,
  },
  alert: {
    darken2: config.alerta.darken2,
    darken1: config.alerta.darken1,
    base: config.alerta.base,
    lighten1: config.alerta.lighten1,
    lighten2: config.alerta.lighten2,
  },
  negative: {
    darken2: config.negativo.darken2,
    darken1: config.negativo.darken1,
    base: config.negativo.base,
    lighten1: config.negativo.lighten1,
    lighten2: config.negativo.lighten2,
  },
  dark: {
    darken6: config.oscuro.darken6,
    darken5: config.oscuro.darken5,
    darken4: config.oscuro.darken4,
    darken3: config.oscuro.darken3,
    darken2: config.oscuro.darken2,
    darken1: config.oscuro.darken1,
    base: config.oscuro.full,
  },
  darkFull: {
    base: config.oscuro.full,
  },
  light: {
    darken6: config.claro.darken6,
    darken5: config.claro.darken5,
    darken4: config.claro.darken4,
    darken3: config.claro.darken3,
    darken2: config.claro.darken2,
    darken1: config.claro.darken1,
    base: config.claro.full,
  },
  lightFull: {
    base: config.claro.full,
  },
}

const myCustomLightTheme = {
  dark: false,
  colors: {
    primary: '#2980b9',
    'primary-darken-1': '#20638f',
    'primary-darken-2': '#164666',
    'primary-lighten-1': '#409ad5',
    'primary-lighten-2': '#6ab0de',
    secondary: '#f5b041',
    'secondary-darken-1': '#f29c11',
    'secondary-darken-2': '#c67e0a',
    'secondary-lighten-1': '#f8c471',
    'secondary-lighten-2': '#fad8a2',
    alternative: '#FFA31A',
    'alternative-darken-1': '#E69317',
    'alternative-darken-2': '#CC8315',
    'alternative-lighten-1': '#FFAD31',
    'alternative-lighten-2': '#FFB648',
    positive: '#2ecc71',
    'positive-darken-1': '#25a25a',
    'positive-darken-2': '#1b7943',
    'positive-lighten-1': '#54d98c',
    'positive-lighten-2': '#7ee2a8',
    alert: '#E1B712',
    'alert-darken-1': '#B4920E',
    'alert-darken-2': '#876E0B',
    'alert-lighten-1': '#E7C541',
    'alert-lighten-2': '#EDD471',
    negative: '#e74c3c',
    'negative-darken-1': '#d62c1a',
    'negative-darken-2': '#a82315',
    'negative-lighten-1': '#ed7669',
    'negative-lighten-2': '#f29f97',
    dark: '#aeb6bf',
    'dark-darken-1': '#929ca8',
    'dark-darken-2': '#758392',
    'dark-darken-3': '#5e6976',
    'dark-darken-4': '#47505a',
    'dark-darken-5': '#31373d',
    'dark-darken-6': '#1a1d21',
    light: '#F8F9F9',
    'light-darken-1': '#dde1e1',
    'light-darken-2': '#c1caca',
    'light-darken-3': '#a6b2b2',
    'light-darken-4': '#8a9b9b',
    'light-darken-5': '#708282',
    'light-darken-6': '#586767',
  },
  variables: {},
}

export default defineVuetifyConfiguration({
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: { myCustomLightTheme },
  },
})
