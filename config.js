import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDfCPcJYjLvE3MP_VvRl4BfP8imHSIf3yc",
    authDomain: "barterapp-66dab.firebaseapp.com",
    projectId: "barterapp-66dab",
    storageBucket: "barterapp-66dab.appspot.com",
    messagingSenderId: "461787844485",
    appId: "1:461787844485:web:a0da615118d09395b87eec"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();