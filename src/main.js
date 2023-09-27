import { createApp } from 'vue'
import router from './router/router'
import store from './store/store'
import App from './App.vue'
import './assets/index.css'

createApp(App).use(router).use(store).mount('#app')
