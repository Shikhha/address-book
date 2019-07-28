<template>
  <div>
    <nav class="navbar-custom">
      <ul class="navbar-ul">
        <li v-if="!isLoggedIn">
          <button @click="login">Log In</button>
        </li>
        <li v-if="!isLoggedIn">
          <button @click="register">Register</button>
        </li>
        <li v-if="currentUser">{{currentUser}}</li>
        <li v-if="isLoggedIn">
          <button @click="logout">Logout</button>
        </li>
      </ul>
    </nav>
    <div class="container pt-1" id="addressbook-app">
      <div class="add-box">
        <router-link id="addContactBtn" to="/add" />
      </div>
      <h1 class="text-center" id="title">Address Book</h1>
      <div class="underline" />
      <router-view />
    </div>
  </div>
</template>

<script>
import { auth } from "./db/index";
export default {
  name: "app",
  data() {
    return {
      isLoggedIn: false,
      currentUser: false
    };
  },
  created() {
    if (auth.currentUser) {
      this.isLoggedIn = true;
      this.currentUser = auth.currentUser.email;
    }
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    register() {
      this.$router.push("/register");
    },
    logout() {
      auth.signOut().then(() => {
        this.$router.push("/login");
        this.currentUser = false;
        this.isLoggedIn = false;
      });
    }
  }
};
</script>


<style>
@import url("./css/main.css");
</style>