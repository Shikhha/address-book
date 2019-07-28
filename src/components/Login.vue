<template>
  <div>
    <div class="container-login">
      <form class="login-form">
        <h2>Login</h2>
        <input type="text" class="form-control" placeholder="Email.." v-model="email" />
        <input type="text" class="form-control" placeholder="Password.." v-model="password" />
        <button @click="login" class="btn btn-primary">LOGIN</button>
      </form>
    </div>
  </div>
</template>

<script>
import { auth } from "../db/index";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login(e) {
      e.preventDefault();
      console.log("register");
      auth.signInWithEmailAndPassword(this.email, this.password).then(user => {
        this.$router.push("/");
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