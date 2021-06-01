
import firebase from 'firebase';
import 'firebase/database'

  const firebaseConfig = {
    apiKey: "AIzaSyCPLbbVMFG354rh2lixO03BPxNQIZwhbLE",
    authDomain: "twitter-clone-264fa.firebaseapp.com",
    projectId: "twitter-clone-264fa",
    storageBucket: "twitter-clone-264fa.appspot.com",
    messagingSenderId: "340422929800",
    appId: "1:340422929800:web:9feca010e1de84c47c5e3d",
    measurementId: "G-6Y67F46JG7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const db=firebase.firestore();
  export  default db;
