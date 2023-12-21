
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDbALBP546TurUlSXxCE-qxozcRxepit38",
    authDomain: "buybusyone.firebaseapp.com",
    databaseURL: "https://buybusyone-default-rtdb.firebaseio.com",
    projectId: "buybusyone",
    storageBucket: "buybusyone.appspot.com",
    messagingSenderId: "523216915762",
    appId: "1:523216915762:web:613a7c54419ec3fafddb2b",
    measurementId: "G-Y94J6C22L9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db }