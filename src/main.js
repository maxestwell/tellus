import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueSound from 'vue-sound'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueSound) // Install VueSound globally if it's a plugin

app.mount('#app')
