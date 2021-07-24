import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDUgBc9QuTdoywJsz-KTyghsU6Y4Bi0s98",
  authDomain: "sns-project-b9393.firebaseapp.com",
  projectId: "sns-project-b9393",
  storageBucket: "sns-project-b9393.appspot.com",
  messagingSenderId: "644241623859",
  appId: "1:644241623859:web:52412b109778dd272fcc46",
}; // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

console.log(firestore);

export { firestore };
