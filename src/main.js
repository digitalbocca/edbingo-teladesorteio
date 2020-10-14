'use strict'

import { createApp } from 'vue'

import App from './App.vue'
import store from './store'

const app = createApp(App)

app.config.productionTip = false

app.use(store)
app.mount('#app')
