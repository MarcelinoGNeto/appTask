import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBI92H9ICjRrbF9P_5Fkhg6FCjigCI0fF0",
  authDomain: "task-881e9.firebaseapp.com",
  projectId: "task-881e9",
  storageBucket: "task-881e9.appspot.com",
  messagingSenderId: "1033701880956",
  appId: "1:1033701880956:web:9ef18b6c593547b86405f9"
};

firebase.initializeApp(firebaseConfig)
const database = firebase.firestore()
export default database