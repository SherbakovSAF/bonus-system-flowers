import { createRouter, createWebHashHistory } from "vue-router";

import ClientInfo from "./components/ClientInfo.vue";
import MainWindow from "./components/MainWindow.vue";
import ChangeClientInfo from "./components/ChangeClientInfo.vue";

const routes = [
    { path: "/", component: MainWindow },
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
