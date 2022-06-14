import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import './assets/css/index.css'

const app = createApp(App)

axios.defaults.baseURL = "https://pokeapi.co/api/v2"

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)

app.mount('#app')
