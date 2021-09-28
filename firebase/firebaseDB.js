import { firebase } from "@firebase/app";
import { doc, getDoc } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAY-6k6SxNBKk1APlo-zuajHZoK4S_4dcM",
    authDomain: "pesulafirebase.firebaseapp.com",
    databaseURL: "https://pesulafirebase-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "pesulafirebase",
    storageBucket: "pesulafirebase.appspot.com",
    messagingSenderId: "58120148635",
    appId: "1:58120148635:web:085a99d0876d2ec151d83e"
  };

firebase.initializeApp(firebaseConfig);
export default firebase;