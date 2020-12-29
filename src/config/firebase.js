import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeFnXNVYIlc1zZVKOLTDIXrJGUVk3M1Ek",
  authDomain: "linkedin-clone-f3d0b.firebaseapp.com",
  projectId: "linkedin-clone-f3d0b",
  storageBucket: "linkedin-clone-f3d0b.appspot.com",
  messagingSenderId: "1016548302024",
  appId: "1:1016548302024:web:736ad23f0ef241104cd9fd",
  measurementId: "G-0EFESG0M29",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
