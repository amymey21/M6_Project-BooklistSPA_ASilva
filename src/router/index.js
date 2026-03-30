import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"), // Lazy-loaded
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"), // Lazy-loaded
    },
    {
      path: "/details/:id",
      name: "details",
      component: () => import("../views/DetailsView.vue"), // Lazy-loaded
    },
  ],
});

export default router;
