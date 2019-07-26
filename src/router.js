import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import AddContact from "./components/AddContact.vue";
import ContactDetail from "./components/ContactDetail.vue";
import UpdateContact from "./components/UpdateContact.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/add",
      name: "AddContact",
      component: AddContact
    },
    {
      path: "/detail/:id",
      name: "contact-detail",
      component: ContactDetail,
      props: true
    },
    {
      path: "/update/:id",
      name: "update",
      component: UpdateContact,
      props: true
    }
  ]
});
