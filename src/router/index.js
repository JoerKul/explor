import Vue from "vue";
import VueRouter from "vue-router";
import { authGuard } from "../auth";

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
    path: "/detail/:url",
    name: "Detail",
    component: () => import("../views/Detail.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
    beforeEnter: authGuard
  }
];

const router = new VueRouter({
  routes
});

export default router;
