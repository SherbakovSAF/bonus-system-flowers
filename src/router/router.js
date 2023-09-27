import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../views/HomeView.vue";
import Profile from "../views/ProfileClientView.vue";
import InputInfo from "../views/InputInfoClientView.vue";

const routes = [
    { path: "/", component: Home },
    {path: "/profile",component: Profile,},
    { path: "/inputInfo/:typeInputInfo", component: InputInfo },
];

export default createRouter({
    history: createWebHashHistory(),
    routes,
});
