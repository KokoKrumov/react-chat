// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD-0q-p948x-iIy47id2LZz9icSUVhOOlA",
    authDomain: "react-chat-c42e9.firebaseapp.com",
    projectId: "react-chat-c42e9",
    storageBucket: "react-chat-c42e9.appspot.com",
    messagingSenderId: "961524126599",
    appId: "1:961524126599:web:04e98e90a9ee6cb459b922",
    measurementId: "G-0BQFE1F764"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider, db};
