import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyD9xOpoeZEMKSOAUrkT9s75VXGVyBxfV84",
    authDomain: "e-library-d849c.firebaseapp.com",
    projectId: "e-library-d849c",
    storageBucket: "e-library-d849c.appspot.com",
    messagingSenderId: "1019079129910",
    appId: "1:1019079129910:web:92c76dffd102c2c1db9197"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
