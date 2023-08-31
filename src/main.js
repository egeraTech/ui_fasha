import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import mixins from '@/mixin/axiosMixin.js'


document.addEventListener('DOMContentLoaded', () => {
    const csrfTokenInput = document.querySelector('input[name="csrfmiddlewaretoken"]');

    if (csrfTokenInput) {
        axios.defaults.headers.common['X-CSRFToken'] = csrfTokenInput.value;
    }
});


createApp(App)
.use(store)
.use(router)
// .config.globalProperties.axios=axios //
.mixin(mixins)
.mount('#app')

axios.defaults.baseURL = 'http://127.0.0.1:8000/api'




