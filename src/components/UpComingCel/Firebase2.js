// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC4CXsqhG_PCoRWxO8sJ30z2x30mIByUDI",
    authDomain: "web18-project-data.firebaseapp.com",
    projectId: "web18-project-data",
    storageBucket: "web18-project-data.appspot.com",
    messagingSenderId: "119819388428",
    appId: "1:119819388428:web:e7c264e365b44cc0081029",
    measurementId: "G-X9W7W92CBV"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };