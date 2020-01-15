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

  export const createUserProfileDocument = async (userAuth, addtionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...addtionalData
        })
      }catch (error){
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;