import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyAkHmWg9_irLvEdhIjTQ3h_-YY8VI3IQss",
    authDomain: "anyweb-e783a.firebaseapp.com",
    databaseURL: "https://anyweb-e783a.firebaseio.com",
    projectId: "anyweb-e783a",
    storageBucket: "anyweb-e783a.appspot.com",
    messagingSenderId: "352463339950",
    appId: "1:352463339950:web:ec2fddf103b2b0b9b9483f",
    measurementId: "G-F0Y2ENWX8W"
  };

  firebase.initializeApp( firebaseConfig );

  const db = firebase.firestore();
  //Auth with token of Google.
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  firebase,
  db,
  googleAuthProvider

}