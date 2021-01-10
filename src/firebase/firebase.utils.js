import "firebase/auth";
import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAcTAEyrLWNK94vbJh0jaJGBe4dnpsj5iQ",
  authDomain: "crwn-clothing-eb226.firebaseapp.com",
  projectId: "crwn-clothing-eb226",
  storageBucket: "crwn-clothing-eb226.appspot.com",
  messagingSenderId: "555551517824",
  appId: "1:555551517824:web:a817911b3563af64974a65",
  measurementId: "G-HP1Q5X89BT",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
