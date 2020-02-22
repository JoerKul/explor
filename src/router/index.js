import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/events",
    name: "Events",
    component: () => import("../views/Events.vue")
  },
  {
    path: "/speaker",
    name: "Speaker",
    component: () => import("../views/Speaker.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
