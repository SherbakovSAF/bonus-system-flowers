import { createRouter, createWebHashHistory } from "vue-router";

import ClientInfo from "./components/ClientInfo.vue";
import SearchClient from "./components/SearchClient.vue";
import ChangeClientInfo from "./components/ChangeClientInfo.vue";

const routes = [
    { path: "/", component: SearchClient },
    {
        path: "/clientInfo",
        component: ClientInfo,
    },
    { path: "/clientInfo/:typeChangeClientInfo", component: ChangeClientInfo },
    // { path: "/editClientInfo", component: EditClientInfo },
];

export default createRouter({
    history: createWebHashHistory(),
    routes,
});
