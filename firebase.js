import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyADEMQNmumatLbXgZZ3NUYFutdzm4-FVc0",
  authDomain: "flemchat-858d5.firebaseapp.com",
  projectId: "flemchat-858d5",
  storageBucket: "flemchat-858d5.appspot.com",
  messagingSenderId: "542003972650",
  appId: "1:542003972650:web:b52d1845ac8b6d33609153",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
