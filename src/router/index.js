import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import { isAuthenticated, isNotAuthenticated } from "./guard";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: isAuthenticated
  },
  {
    path: "/login",
    name: "Login",
    beforeEnter: isNotAuthenticated,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue")
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
