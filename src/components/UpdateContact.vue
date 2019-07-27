<template>
  <div>
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
            <input class="form-control" type="text" id="fb" v-model="contact.facebook" />
          </div>
          <div class="social-div">
            <button class="icon instaico"></button>
            <input class="form-control" type="text" id="ig" v-model="contact.instagram" />
          </div>
          <div class="social-div">
            <button class="icon linkedinico"></button>
            <input class="form-control" type="text" id="link" v-model="contact.linkedin" />
          </div>
          <div class="social-div">
            <button class="icon twico"></button>
            <input class="form-control" type="text" id="twi" v-model="contact.twitter" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
import fireStore from "../db/index";

export default {
  name: "update",
  data() {
    return {
      contact: []
    };
  },
  methods: {
    save() {
      fireStore
        .collection("contacts")
        .doc(this.$route.params.id)
        .update({
          ...this.contact
        })
        .then(() => {
          console.log("updated successfuly");
        });
      this.$router.push("/");
    },
    cancel() {
      this.$router.push("/");
    }
  },
  created() {
    fireStore
      .collection("contacts")
      .doc(this.$route.params.id)
      .get()
      .then(doc => {
        if (doc.exists) {
          this.contact = doc.data();
        } else {
          console.log("document doesnt exists");
        }
      });
  }
};
</script>