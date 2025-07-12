import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB_SfBm9aBBB5tTpKb44cn2kTRiIz4D5U8",
  authDomain: "project-d5faf.firebaseapp.com",
  projectId: "project-d5faf",
  storageBucket: "project-d5faf.firebasestorage.app",
  messagingSenderId: "974807336107",
  appId: "1:974807336107:web:a5322d098a67d7a1d9e3ee",
  measurementId: "G-DZTNBL0G9J"
};


  initializeApp(firebaseConfig);

  const db = getFirestore();

  export {db}