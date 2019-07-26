 <template>
  <div>
    <router-link id="addContactBtn" to="/add" />
    <div class="container" id="list">
      <ContactListItem
        @getDetails="getDetails(contact['id'])"
        @deleteContact="deleteContact(contact['id'])"
        v-for="contact in contacts"
        v-bind:contact="contact"
        v-bind:id="contact['id']"
        v-bind:key="contact.id"
      />
    </div>
  </div>
</template>

<script>
import ContactListItem from "../components/ContactList";
import fireStore from "../db/index";
export default {
  name: "home",
  data() {
    return {
      contacts: [],
      id: ""
    };
  },
  methods: {
    getDetails(key) {
      this.$router.push("/detail/" + key);
    }
  },
  created() {
    fireStore.collection("contacts").onSnapshot(snap => {
      let temp = [];
      snap.forEach(doc => {
        temp.push({ id: doc.id, ...doc.data() });
      });
      this.contacts = [...temp];
    });
  },
  components: {
    ContactListItem
  }
};
</script>
