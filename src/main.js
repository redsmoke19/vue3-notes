import { createApp } from "vue";
import App from "./App.vue";
import "./assets/scss/main.scss";
import router from "./router";

const app = createApp(App);
app.use(router);
app.mount("#app");
