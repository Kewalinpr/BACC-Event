import { createApp } from "vue";
import "./style.css";
import { createPinia } from 'pinia'
import App from "./App.vue";
import router from "./routers/index.ts";
import axios from "./axios.ts"


const pinia = createPinia()
const app = createApp(App);
app.use(router);
app.use(pinia)
app.mount("#app");
add.use(axios, {
    baseUrl: 'https://cataas.com/',
})


