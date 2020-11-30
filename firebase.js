import firebase from 'firebase'


const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCwvyth2JmkPaJzzpRKnzwmY_OJCwTwR64",
    authDomain: "instagram-clone-7df6d.firebaseapp.com",
    databaseURL: "https://instagram-clone-7df6d.firebaseio.com",
    projectId: "instagram-clone-7df6d",
    storageBucket: "instagram-clone-7df6d.appspot.com",
    messagingSenderId: "690346164720",
    appId: "1:690346164720:web:fddd13fbb2e6b6b8c69d35",
    measurementId: "G-ST1XFY5SDE"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage =firebase.storage();

export {db, auth, storage}