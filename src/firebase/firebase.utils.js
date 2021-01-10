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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
