import { createRouter, createWebHashHistory } from "vue-router";

import ClientInfo from "./components/ClientInfo.vue";
import RegNewClientInfo from "./components/RegNewClientInfo.vue";
import SearchClient from "./components/SearchClient.vue";
import EditClientInfo from "./components/EditClientInfo.vue"

const routes = [
    { path: "/", component: SearchClient },
    { path: "/clientInfo", 
     component: ClientInfo, 
     children: [{
          path: 'editClientInfo',
          component: EditClientInfo
     }] },
    { path: "/regNewClient", component: RegNewClientInfo },
];

export default createRouter({
    history: createWebHashHistory(),
    routes,
});
