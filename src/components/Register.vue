<template>
  <div>
    <div class="container-login">
      <form class="login-form">
        <h2>Register</h2>
        <input type="text" v-model="email" class="form-control" placeholder="Email.." />
        <input type="text" v-model="password" class="form-control" placeholder="Password.." />
        <button @click="register" class="btn btn-primary">Register</button>
      </form>
      <h4 class="error-m" v-if="error">{{error}}</h4>
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
      password: "",
      error: ""
    };
  },
  methods: {
    register(e) {
      e.preventDefault();
      auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          this.$router.go({ path: this.$router.path });
        })
        .catch(e => {
          this.error = e;
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
@media only screen and (max-width: 600px) {
  .container-login {
    width: 300px;
  }
}
</style>