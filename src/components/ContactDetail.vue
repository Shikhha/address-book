<template>
  <div>
    <div class="container-detail">
      <router-link class="back-link" to="/">
        <i class="material-icons">reply</i>
        <span>Back</span>
      </router-link>
      <div class="details">
        <div class="specific-details">
          <div class="detail-name">{{contact.name}}</div>
          <div>{{contact.email}}</div>
          <div>{{contact.phone}}</div>
          <div>{{contact.address}}</div>
        </div>
        <div class="social-details">
          <div class="social-unit">
            <button class="icon fbico"></button>
            <span>{{contact.facebook}}</span>
          </div>
          <div class="social-unit">
            <button class="icon instaico"></button>
            <span>{{contact.instagram}}</span>
          </div>
          <div class="social-unit">
            <button class="icon linkedinico"></button>
            <span>{{contact.linkedin}}</span>
          </div>
          <div class="social-unit">
            <button class="icon twico"></button>
            <span>{{contact.twitter}}</span>
          </div>
        </div>
      </div>
    </div>
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

<style>
.container-detail {
  width: 75vw;
  margin: auto;
}
.details {
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.specific-details {
  font-size: 20px;
  font-weight: 300;
  color: rgb(82, 80, 80);
}

.detail-name {
  font-size: 50px;
  font-weight: 100;
  color: black;
  letter-spacing: 2px;
}
.social-details {
  font-size: 22px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}
.social-details span {
  margin-left: 10px;
}
.social-unit {
  display: flex;
}
.back-link {
  margin-top: 15px;
  display: flex;
  align-items: flex-end;
  color: rgb(129, 170, 16);
}
.back-link span {
  font-size: 15px;
}
.fbico {
  background: url("../assets/facebook-icon.svg");
  background-size: 40px 40px;
}
@media only screen and (max-width: 500px) {
  .social-details {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .details {
    justify-content: stretch;
  }
  .detail-name {
    font-size: 30px;
    letter-spacing: 1px;
  }
}
</style>