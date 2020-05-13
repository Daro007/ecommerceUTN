import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBzR8PmMjJjdItq9cpd1QAAYufUUlGGPhE",
  authDomain: "e-commerceutn.firebaseapp.com",
  databaseURL: "https://e-commerceutn.firebaseio.com",
  projectId: "e-commerceutn",
  storageBucket: "e-commerceutn.appspot.com",
  messagingSenderId: "419668095174",
  appId: "1:419668095174:web:43425a2c6cbfc66163e7c7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
// db.settings({
//   timestampsInSnapshots: true,
// });
firebase.db = db;
export default firebase;
