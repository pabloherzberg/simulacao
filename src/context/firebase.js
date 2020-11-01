import firebase from "firebase/app";
require("firebase/firestore");
require("firebase/auth");
require("firebase/database");
require('firebase/storage');

const firebaseConfig = {
  apiKey: "AIzaSyD5yT8m3wCz-CIbrN-ZBiUvnqtld1E5EAI",
    authDomain: "projetofono-c9088.firebaseapp.com",
    databaseURL: "https://projetofono-c9088.firebaseio.com",
    projectId: "projetofono-c9088",
    storageBucket: "projetofono-c9088.appspot.com",
    messagingSenderId: "1045130767348",
    appId: "1:1045130767348:web:920820d34e2fd0f63f67a1"

};

firebase.initializeApp(firebaseConfig);

export default firebase;
