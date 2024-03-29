import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/aura-light-green/theme.css";
import "primeicons/primeicons.css";
import store from "./redux/store";

const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.use(store);
app.mount("#app");
