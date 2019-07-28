<template>
  <div>
    <div class="container-login">
      <form class="login-form">
        <h2>Register</h2>
        <input type="text" v-model="email" class="form-control" placeholder="Email.." />
        <input type="text" v-model="password" class="form-control" placeholder="Password.." />
        <button @click="register" class="btn btn-primary">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "../db/index";
import { auth } from "../db/index";
export default {
  name: "register",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    register(e) {
      console.log("register");
      e.preventDefault();
      auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          alert("registered");
          console.log(user);
        });
    }
  }
};
</script>

<style>
.container-login {
  padding: 30px;
  width: 30vw;
  height: 40vh;
  margin: auto;
  margin-top: 20px;
  border: 1px solid black;
}
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.login-form input {
  margin: 10px;
}
</style>