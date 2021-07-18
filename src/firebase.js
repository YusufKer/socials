import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAIOLvQJfLSs9MBHc2IYbrAcKD7a2U-fwY",
    authDomain: "socials-b1b3a.firebaseapp.com",
    projectId: "socials-b1b3a",
    storageBucket: "socials-b1b3a.appspot.com",
    messagingSenderId: "821157244995",
    appId: "1:821157244995:web:bd92ebd049dc31feeb24f6"
})

export const auth = app.auth();
export const db = app.firestore();
export default app;
