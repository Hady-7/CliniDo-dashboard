import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDxtLeqwR3AMlQYM6zk7Uz4e8_Dk0MZWoI",
  authDomain: "clinido-ce15d.firebaseapp.com",
  projectId: "clinido-ce15d",
  storageBucket: "clinido-ce15d.appspot.com",
  messagingSenderId: "584753027934",
  appId: "1:584753027934:web:2924471040c4b8e4ad8dcf"
};

const app = firebase.initializeApp(firebaseConfig);
export default firebase;


