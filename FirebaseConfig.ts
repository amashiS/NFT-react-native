import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDju9M9Zft9GEJQZ4f6STE4UFWFj-VAQnk",
  authDomain: "nftapp-1a121.firebaseapp.com",
  projectId: "nftapp-1a121",
  storageBucket: "nftapp-1a121.appspot.com",
  messagingSenderId: "1009304537118",
  appId: "1:1009304537118:web:9b06899e3428f43e26c60f"
};

// Initialize Firebase

export const  FIREBASE_APP = initializeApp(firebaseConfig)
export const  FIREBASE_AUTH = getAuth(FIREBASE_APP)
export const  FIREBASE_DB = getFirestore(FIREBASE_APP)