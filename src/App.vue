<template>
  <div>
    <nav class="navbar-custom">
      <ul class="navbar-ul">
        <li>
          <button @click="login">Log In</button>
        </li>
        <li>
          <button @click="register">Register</button>
        </li>
        <li>Name</li>
        <li>
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
      });
    }
  }
};
</script>


<style>
@import url("./css/main.css");
</style>