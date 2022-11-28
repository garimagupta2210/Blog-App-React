// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8e-D_eWmg8d3MbzUhu_NKnYaXQzgsR8A",
  authDomain: "react-blog-app-1437b.firebaseapp.com",
  projectId: "react-blog-app-1437b",
  storageBucket: "react-blog-app-1437b.appspot.com",
  messagingSenderId: "909523273131",
  appId: "1:909523273131:web:0a2f2c836445097173beee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
