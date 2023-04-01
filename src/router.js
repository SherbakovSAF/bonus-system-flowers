import { createRouter, createWebHashHistory } from "vue-router";

import ClientInfo from "./components/ClientInfo.vue";
import RegNewClientInfo from "./components/RegNewClientInfo.vue";
import SearchClient from "./components/SearchClient.vue";
import EditClientInfo from "./components/EditClientInfo.vue"

const routes = [
    { path: "/", component: SearchClient },
    { path: "/clientInfo", component: ClientInfo },
    { path: "/regNewClient", component: RegNewClientInfo },
    { path: '/editClientInfo', component: EditClientInfo },
];

export default createRouter({
    history: createWebHashHistory(),
    routes,
});
