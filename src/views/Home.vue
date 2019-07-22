<template>
  <div>
    <router-link id="addContactBtn" to="/add" />

    <div id="list">
      <ContactListItem
        v-for="contact in contacts"
        v-bind:contact="contact"
        v-bind:key="contact.key"
      />
    </div>
  </div>
</template>

<script>
import ContactListItem from "../components/ContactList";
import { db } from "../db/index";
export default {
  name: "home",
  data() {
    return {
      contacts: db
    };
  },
  components: {
    ContactListItem
  }
};
</script>
