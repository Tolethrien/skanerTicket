import { createRouter, createWebHistory } from "vue-router";
import Events from "@/views/events.vue";
import Users from "@/views/users.vue";
import Analytics from "@/views/analytics.vue";
import Settings from "@/views/settings.vue";
import Main from "@/layouts/main.vue";
const routes = [
  {
    path: "/",
    redirect: "/events",
    component: Main,
    children: [
      {
        path: "events",
        name: "Events",
        component: Events,
      },
      {
        path: "users",
        name: "Users",
        component: Users,
      },
      {
        path: "analytics",
        name: "Analytics",
        component: Analytics,
      },
      {
        path: "settings",
        name: "Settings",
        component: Settings,
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
