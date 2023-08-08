import { createRouter, createWebHistory } from 'vue-router';
import welcome from "./components/welcome.vue";

const routes = [
  {
    path: '/',
    component: welcome,
    meta: { requiresAuth: true }, // Add this meta field to require authentication
  },
  // Add other routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
