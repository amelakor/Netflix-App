import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBWYwVQ_nDZ6hKeanI_Csv-agtpG_sHG-4",
  authDomain: "etflix-b55cc.firebaseapp.com",
  databaseURL: "https://etflix-b55cc.firebaseio.com",
  projectId: "etflix-b55cc",
  storageBucket: "etflix-b55cc.appspot.com",
  messagingSenderId: "17790046766",
  appId: "1:17790046766:web:b27c4229ff2d263e80c5bf",
};
// Initialize Firebase
const firebase = Firebase.initializeApp(firebaseConfig);

export { firebase };
