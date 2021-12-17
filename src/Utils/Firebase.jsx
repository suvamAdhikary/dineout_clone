import firebase from "firebase";

const firebaseConfig = {
  // Your credentials
  apiKey: "AIzaSyCGnqOaqMxyi-RJGataTmYNsqVcnueHZBQ",
  authDomain: "dineout-client-7c634.firebaseapp.com",
  projectId: "dineout-client-7c634",
  storageBucket: "dineout-client-7c634.appspot.com",
  messagingSenderId: "753726811097",
  appId: "1:753726811097:web:c27404b7a6a90c8d2f47c8"
};

firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export { auth, firebase };
