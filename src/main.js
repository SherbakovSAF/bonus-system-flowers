import { createApp } from 'vue'
import { createRouter, createWebHashHistory} from 'vue-router'
import App from './App.vue'
import './assets/index.css'


import ClientInfo from "./components/ClientInfo.vue"
import RegNewClientInfo from "./components/RegNewClientInfo.vue"
import SearchClient from "./components/SearchClient.vue"

const routes = [
     { path: '/', component: SearchClient },
     { path: '/clientInfo', component: ClientInfo },
     { path: '/regNewClient', component: RegNewClientInfo },
   ]

 const router = createRouter({
     history: createWebHashHistory(),
     routes,
})


createApp(App).use(router).mount('#app')
