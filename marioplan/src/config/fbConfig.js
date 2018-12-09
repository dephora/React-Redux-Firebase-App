import firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth'
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAQ3i8H87gRe62toDSz7I2z_SKEbJpZz60",
  authDomain: "net-ninja-marioplan-ba954.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-ba954.firebaseio.com",
  projectId: "net-ninja-marioplan-ba954",
  storageBucket: "net-ninja-marioplan-ba954.appspot.com",
  messagingSenderId: "465636232090"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;