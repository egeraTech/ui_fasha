import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import mixins from '@/mixin/axiosMixin.js'

createApp(App)
.use(store)
.use(router)
.mixin(mixins)
.mount('#app')

axios.defaults.baseURL = 'http://localhost:8000/api'
