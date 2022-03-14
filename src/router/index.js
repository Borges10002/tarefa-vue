import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    titulo: 'Tarefa',
    component: () =>
      import("../views/Home.vue"),

  },
  {
    path: "/criar",
    name: "criar",
    titulo: 'Criar',
    component: () =>
      import("../views/Criar.vue"),
  },

  {
    path: '*',
    component: () =>
      import("../views/Home.vue")
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
