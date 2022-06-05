import "./assets/styles/global.css";
import Vue from "vue";
import App from "./App.vue";
import vuetify from "@/plugins/vuetify";
import Home from "./Home.vue";
import Shop from "./Shop.vue";
import VueRouter from "vue-router";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: Home,
    name: "Home",
  },
  {
    path: "shop",
    component: Shop,
    name: "Shop",
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
