import { createApp } from 'vue'
import App from './App.vue'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import store from './store'
import i18n from './i18n'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from './router'
import images from './plugins/assets';

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi'
  },
})

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.use(store)
app.use(i18n)

app.config.globalProperties.$state = process.env.STATE
app.config.globalProperties.$images = images

app.config.globalProperties.t = (key) => i18n.global.t(key);

app.mount('#app')