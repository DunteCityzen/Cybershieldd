// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9a7TrDxXQOKTYtfIk_jcfnC-s-whE8wc",
  authDomain: "cybershield-ee459.firebaseapp.com",
  projectId: "cybershield-ee459",
  storageBucket: "cybershield-ee459.appspot.com",
  messagingSenderId: "577971443604",
  appId: "1:577971443604:web:c16dc7980fbccfbe962181"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

export default db