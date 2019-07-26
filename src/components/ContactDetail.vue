<template>
  <div>
    <router-link to="/">back</router-link>
    <button>delete</button>
    <div>name: {{contact.name}}</div>
    <div>email: {{contact.email}}</div>
    <div>phone: {{contact.phone}}</div>
    <div>facebook: {{contact.facebook}}</div>
    <div>Instagram: {{contact.instagram}}</div>
    <div>facebook: {{contact.linkedin}}</div>
    <div>facebook: {{contact.twitter}}</div>
  </div>
</template>


<script>
import firestore from "../db/index";
export default {
  name: "contact-detail",
  data() {
    return {
      contact: {}
    };
  },
  created() {
    firestore
      .collection("contacts")
      .doc(this.$route.params.id)
      .onSnapshot(doc => {
        this.contact = doc.data();
      });
  }
};
</script>