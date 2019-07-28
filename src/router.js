import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import AddContact from "./components/AddContact.vue";
import ContactDetail from "./components/ContactDetail.vue";
import UpdateContact from "./components/UpdateContact.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import { auth } from "./db/index";

Vue.use(Router);

let router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: "/add",
      name: "AddContact",
      component: AddContact,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/detail/:id",
      name: "contact-detail",
      component: ContactDetail,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/update/:id",
      name: "update",
      component: UpdateContact,
      props: true,
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth.currentUser) {
      next({
        path: "/login",
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (auth.currentUser) {
      next({
        path: "/",
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      console.log("login");
      console.log(auth.currentUser);
      next();
    }
  } else {
    next();
  }
});

export default router;
