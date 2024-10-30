import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/index.vue";
import About from "@/views/about.vue";
import Main from "@/layouts/main.vue";
const routes = [
  {
    path: "/",
    component: Main,
    children: [
      {
        path: "",
        name: "Home",
        component: Index,
      },
      {
        path: "about",
        name: "About",
        component: About,
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
