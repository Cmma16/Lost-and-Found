import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { auth } from "../firebase";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/posts",
      name: "posts",

      component: () => import("../views/PostsView.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/postDetail",
      name: "postDetail",

      component: () => import("../views/PostDetailView.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/create-report",
      name: "CreateReport",

      component: () => import("../views/CreateReport.vue"),
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.path === "/" && auth.currentUser) {
    next("/posts");
    return;
  }

  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !auth.currentUser
  ) {
    next("/");
  }

  next();
});

export default router;
