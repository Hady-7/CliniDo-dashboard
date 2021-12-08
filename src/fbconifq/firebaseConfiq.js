// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxtLeqwR3AMlQYM6zk7Uz4e8_Dk0MZWoI",
  authDomain: "clinido-ce15d.firebaseapp.com",
  projectId: "clinido-ce15d",
  storageBucket: "clinido-ce15d.appspot.com",
  messagingSenderId: "584753027934",
  appId: "1:584753027934:web:719e525a3580d8fbad8dcf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();