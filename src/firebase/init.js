import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBVPoOyJyNNCsYNOl5IhSA7QrY5Lfd5PLA",
    authDomain: "training-diary-55dcd.firebaseapp.com",
    databaseURL: "https://training-diary-55dcd.firebaseio.com",
    projectId: "training-diary-55dcd",
    storageBucket: "training-diary-55dcd.appspot.com",
    messagingSenderId: "497752081686"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({timestampsInSnapshots: true})

//   export firestore database
export default firebaseApp.firestore()