<template>
  <div class="add-contact">
    <a href="#" v-on:click="save" class="ion">
      <i class="material-icons">get_app</i>
    </a>
    <button v-on:click="cancel" class="ion">
      <i class="material-icons">highlight_off</i>
    </button>

    <div class="container-add">
      <form class="add-form">
        <div class="form-div">
          <input
            placeholder="Name..."
            class="form-control"
            type="text"
            id="name"
            v-model="contact.name"
          />
        </div>
        <div class="form-div">
          <input
            placeholder="Email..."
            class="form-control"
            type="text"
            id="mail"
            v-model="contact.email"
          />
        </div>
        <div class="form-div">
          <input
            placeholder="Phone..."
            class="form-control"
            type="text"
            id="phone"
            v-model="contact.phone"
          />
        </div>
        <div class="form-div-address">
          <input
            placeholder="Address..."
            class="form-control"
            type="text"
            id="address"
            v-model="contact.address"
          />
        </div>
        <div class="social">
          <div class="social-div">
            <button class="icon fbico"></button>
            <input class="form-control" type="text" id="fb" v-model="contact.fbHandle" />
          </div>
          <div class="social-div">
            <button class="icon instaico"></button>
            <input class="form-control" type="text" id="ig" v-model="contact.instaHandle" />
          </div>
          <div class="social-div">
            <button class="icon linkedinico"></button>
            <input class="form-control" type="text" id="link" v-model="contact.linkedHandle" />
          </div>
          <div class="social-div">
            <button class="icon twico"></button>
            <input class="form-control" type="text" id="twi" v-model="contact.twitterHandle" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import firestore from "../db/index";
export default {
  name: "AddContact",
  data() {
    return {
      contact: {
        name: "",
        email: "",
        phone: "",
        address: "",
        fbHandle: "",
        twitterHandle: "",
        instaHandle: "",
        linkedHandle: ""
      }
    };
  },
  methods: {
    clearOut() {
      for (let item in this.contact) {
        this.contact[item] = "";
      }
    },
    save(e) {
      e.preventDefault();
      alert("saved");
      firestore.collection("contacts").add({
        address: this.contact.address,
        name: this.contact.name,
        email: this.contact.email,
        phone: this.contact.phone,
        facebook: this.contact.fbHandle,
        linkedin: this.contact.linkedHandle,
        instagram: this.contact.instaHandle,
        twitter: this.contact.twitterHandle
      });
      this.clearOut();
      this.$router.push("/");
    },
    cancel() {
      this.$router.push("/");
    }
  }
};
</script>
<style>
.container-add {
  max-width: 80vw;
  margin: auto;
  margin-top: 10px;
}
.add-contact {
  padding: 10px;
  height: 30vh;
}
.add-form {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}
.form-div {
  flex: 1;
  max-width: 70vh;
  margin: 10px 10px;
  display: flex;
}

.form-div input {
  border-left: none;
  border-right: none;
  border-top: none;
}
.form-div input:focus {
  box-shadow: inset 0 -1px 0 #ddd;
}
.social-div input {
  margin-left: 5px;
  border-left: none;
  border-right: none;
  border-top: none;
}
.social-div input:focus {
  box-shadow: inset 0 -1px 0 #ddd;
}
.form-div-address input {
  border-left: none;
  border-right: none;
  border-top: none;
}
.form-div-address input:focus {
  box-shadow: inset 0 -1px 0 #ddd;
}
.social {
  margin-top: 10px;
}
.social-div {
  display: flex;
  align-items: flex-end;
  margin-bottom: 5px;
}
.social-div button {
  margin-right: 5px;
  width: 50px;
}
.form-div-address {
  width: 80vw;
  margin: 10px 10px;
  display: flex;
}
.ion {
  padding: 2px;
  font-size: 20px;
  color: rgb(129, 170, 16);
}
@media only screen and (max-width: 500px) {
  .title {
    font-size: 30px;
  }

  .add-form {
    flex-direction: column;
  }
}
</style>