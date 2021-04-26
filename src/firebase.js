import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD63N5AdUkieWKtkr4owNc8RCHJxB2zhpw",
  authDomain: "disney-clone-redux-f8d25.firebaseapp.com",
  projectId: "disney-clone-redux-f8d25",
  storageBucket: "disney-clone-redux-f8d25.appspot.com",
  messagingSenderId: "733418656949",
  appId: "1:733418656949:web:36aa49de2386b8adf91afc",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
