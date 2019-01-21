//package that mirrors to state
import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "yourAPIkey",
  authDomain: "wedding-demo-9ff33.firebaseapp.com",
  databaseURL: "https://wedding-demo-9ff33.firebaseio.com"
});

//created the firebase binding
const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
