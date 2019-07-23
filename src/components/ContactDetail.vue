<template>
  <div>
    <router-link to="/">back</router-link>
    <button>delete</button>
    <div>name: {{contact.name}}</div>
    <div>email: {{contact.email}}</div>
    <div>phone: {{contact.phone}}</div>
    <div>facebook: {{contact.facebook}}</div>
  </div>
</template>


<script>
import firestore from "../db/index";
export default {
  name: "contact-detail",
  props: ["id"],
  data() {
    return {
      contact: {}
    };
  },
  created() {
    let ref = firestore.collection("contacts").doc(this.id);
    ref.get().then(doc => {
      this.contact = doc.data();
    });
  }
};
</script>