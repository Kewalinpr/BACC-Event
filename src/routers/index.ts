import { createRouter, createWebHistory } from "vue-router";
import Home from "../view/Home.vue";
import Coponview from "../view/Coponview.vue"; 
import Historyview from "../view/Historyview.vue"; 
const routes = [
    
    { path: "/", name: "home-page", component: Home },
    { path: "/coponview/:id", name: "copon-page", component: Coponview },
    { path: "/historyview", name: "history-page", component: Historyview }
  ];
   
const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
