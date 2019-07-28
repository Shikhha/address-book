<template>
  <div>
    <div class="container-login">
      <form class="login-form">
        <h2>Login</h2>
        <input type="text" class="form-control" placeholder="Email.." v-model="email" />
        <input type="text" class="form-control" placeholder="Password.." v-model="password" />
        <button @click="login" class="btn btn-info">LOGIN</button>
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
  width: 400px;
  padding: 40px;
  height: 40vh;
  margin: auto;
  margin-top: 20px;
  background-color: white;
  border: 0.5px solid rgb(251, 176, 176);
}
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.login-form input {
  margin: 10px;
  border-left: none;
  border-right: none;
  border-top: none;
}
.login-form input:focus {
  box-shadow: inset 0 -1px 0 #ddd;
}
.login-form h2 {
  padding: 10px;
}
.login-form button {
  flex: 0 0 30px;
  margin: auto;
  margin-top: 10px;
}
@media only screen and (max-width: 500px) {
  .container-login {
    width: 300px;
  }
}
</style>