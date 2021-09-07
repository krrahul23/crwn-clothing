import "firebase/auth";
import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBIDD24Cy1wWuwHO4R-1m6DgabkIYLQuGA",
  authDomain: "crwn-clothing-219cb.firebaseapp.com",
  projectId: "crwn-clothing-219cb",
  storageBucket: "crwn-clothing-219cb.appspot.com",
  messagingSenderId: "988656042389",
  appId: "1:988656042389:web:d38a98ee5851a39f81b69c",
  measurementId: "G-3NGN7CS6S3",
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

export const addCollectionAndDocuments = (collectionKey, objectsToAdd) => {
  const collectoinRef = firestore.collection(collectionKey);
  console.log(collectoinRef);
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
