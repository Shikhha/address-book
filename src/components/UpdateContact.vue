<template>
  <div>
    <h2>Update</h2>
    <a href="#" v-on:click="save">update</a>
    <button v-on:click="cancel">cancel</button>
    <form>
      <div>
        <label for="name">Name:</label>
        <input class="form-control" type="text" id="name" v-model="contact.name" />
      </div>
      <div>
        <label for="mail">Email:</label>
        <input class="form-control" type="text" id="mail" v-model="contact.email" />
      </div>
      <div>
        <label for="phone">Phone:</label>
        <input class="form-control" type="text" id="phone" v-model="contact.phone" />
      </div>
      <div>
        <label for="address">Address:</label>
        <input class="form-control" type="text" id="address" v-model="contact.address" />
      </div>
      <div>
        <label for="fb">Facebook:</label>
        <input class="form-control" type="text" id="fb" v-model="contact.facebook" />
      </div>
      <div>
        <label for="ig">Instagram:</label>
        <input class="form-control" type="text" id="ig" v-model="contact.instagram" />
      </div>
      <div>
        <label for="link">Linkedin:</label>
        <input class="form-control" type="text" id="link" v-model="contact.linkedin" />
      </div>
      <div>
        <label for="twi">Twitter:</label>
        <input class="form-control" type="text" id="twi" v-model="contact.twitter" />
      </div>
    </form>
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