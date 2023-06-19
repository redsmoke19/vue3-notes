export default [
  {
    path: "/",
    name: "HomePage",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/about",
    name: "AboutPage",
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () => import("@/views/404.vue"),
  },
];
