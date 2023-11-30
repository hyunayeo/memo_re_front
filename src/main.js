import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap";
import "../node_modules/bootswatch/dist/lux/bootstrap.min.css";

const app = createApp(App);
app.use(router).mount("#app");
