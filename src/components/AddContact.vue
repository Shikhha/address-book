<template>
  <div>
    <a href="#" id="saveBtn" v-on:click="save" />
    <div class="add-form">
      <UserInput label="name" v-model="contact.name"></UserInput>
      <UserInput label="e-mail" mode="texthalf" v-model="contact.email"></UserInput>
      <UserInput label="phone" mode="texthalf" v-model="contact.phone"></UserInput>
      <UserInput label="address" mode="textarea" v-model="contact.address"></UserInput>
      <UserInput platform="fb" mode="social" v-model="contact.fbHandle"></UserInput>
      <UserInput platform="insta" mode="social" v-model="contact.instaHandle"></UserInput>
      <UserInput platform="twi" mode="social" v-model="contact.twitterHandle"></UserInput>
      <UserInput platform="link" mode="social" v-model="contact.linkedHandle"></UserInput>
    </div>
  </div>
</template>

<script>
import UserInput from "./UserInput";
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
      alert(this.contact.name + " " + this.contact.email);
      this.clearOut();
      this.$router.push("/");
    }
  },
  components: {
    UserInput
  }
};
</script>
<style>
</style>