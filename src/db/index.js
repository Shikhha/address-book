import vue from "vue";
import Firebase from "firebase";
import "firebase/firestore";
const config = {
  apiKey: "AIzaSyC2NtehlwBqQZXc7IADvxGCGpxYb8Hy9Wo",
  authDomain: "address-book-vue.firebaseapp.com",
  databaseURL: "https://address-book-vue.firebaseio.com",
  projectId: "address-book-vue",
  storageBucket: "",
  messagingSenderId: "354536269381",
  appId: "1:354536269381:web:f0bd0b335a466b61"
};
Firebase.initializeApp(config);

export default Firebase.firestore();
