import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

const app = createApp(App);
app.use(router).mount("#app");
app.use(VCalendar, {})
