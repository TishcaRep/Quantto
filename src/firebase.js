import firebase from "firebase/app";
import "firebase/firestore";
import "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCNGCcPoTiKar4yGIQ1J4IcmrvxAAC_W_Y",
  authDomain: "quanttov1.firebaseapp.com",
  databaseURL: "https://quanttov1.firebaseio.com",
  projectId: "quanttov1",
  storageBucket: "quanttov1.appspot.com",
  messagingSenderId: "566343226500",
  appId: "1:566343226500:web:67f0ec2e237b6dbec0ded1",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore() 
const auth = firebase.auth()

export {db, auth}
