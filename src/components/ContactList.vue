<template>
  <div>
    <div class="contact-list-item row p-md-3 text-center text-md-justify">
      <div class="contact-name-item col-12 col-md-4">{{contact.name}}</div>
      <div class="contact-email-item col-12 col-md-4">{{contact.email}}</div>
      <div class="contact-phone-item col-12 col-md-4">{{contact.phone}}</div>
      <button @click="$emit('getDetails')">view</button>
      <br />
      <button @click="deleteContact">delete contact</button>
      <button @click="updateContact">update contact</button>
    </div>
  </div>
</template>

<script>
import fireStore from "../db/index";
export default {
  name: "contact-list-item",
  props: ["contact", "id"],
  methods: {
    deleteContact(key) {
      console.log("DELETE");
      fireStore
        .collection("contacts")
        .doc(this.id)
        .delete()
        .then(function() {
          console.log("Document successfully deleted!");
        })
        .catch(function(error) {
          console.error("Error removing document: ", error);
        });
    },
    updateContact() {
      this.$router.push("/update/" + this.id);
    }
  }
};
</script>
