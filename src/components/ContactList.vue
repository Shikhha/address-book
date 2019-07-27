<template>
  <div>
    <div class="contact-list-item">
      <div class="contact-name-item">{{contact.name}}</div>
      <div class="contact-email-item">{{contact.email}}</div>
      <div class="contact-phone-item">{{contact.phone}}</div>
      <div class="options-panel">
        <button @click="$emit('getDetails')" class="ion-btn">
          <i class="material-icons">touch_app</i>
        </button>
        <button @click="deleteContact" class="ion-btn">
          <i class="material-icons">highlight_off</i>
        </button>
        <button @click="updateContact" class="ion-btn">
          <i class="material-icons">create</i>
        </button>
      </div>
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
