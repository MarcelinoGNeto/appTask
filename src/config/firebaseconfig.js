import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDD5fV-p30tNan74I-UzuIhX_eJXqGqUt8",
  authDomain: "authentication-8d569.firebaseapp.com",
  projectId: "authentication-8d569",
  storageBucket: "authentication-8d569.appspot.com",
  messagingSenderId: "1008691947260",
  appId: "1:1008691947260:web:a4c6ef3845730d7a365979"
};

firebase.initializeApp(firebaseConfig)

export default firebase