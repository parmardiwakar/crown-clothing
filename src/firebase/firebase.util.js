import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCq5SFPnxSuhdaHR8qf-jimK_BYcqsPfGw",
    authDomain: "crown-db-2454b.firebaseapp.com",
    databaseURL: "https://crown-db-2454b.firebaseio.com",
    projectId: "crown-db-2454b",
    storageBucket: "crown-db-2454b.appspot.com",
    messagingSenderId: "531546630376",
    appId: "1:531546630376:web:61a51395bce315c6f2415d"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;