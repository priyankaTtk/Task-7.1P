import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {getFirestore, doc, getDoc , setDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCrv9JO2z6-Vcu7ilTFQv9DINs4byNy7bc",
  authDomain: "sit313-97c0a.firebaseapp.com",
  projectId: "sit313-97c0a",
  storageBucket: "sit313-97c0a.appspot.com",
  messagingSenderId: "575207555338",
  appId: "1:575207555338:web:82f3281f50dc5a5a4b3af3",
  measurementId: "G-GJKBQHTV7S"
};

  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider(); 
   provider.setCustomParameters ({
    prompt:"select_account"
   });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocFromAuth= async (userAuth, additionalInformation ={}) =>{
  if (!userAuth) return;
  
  const userDocRef = doc (db, 'users', userAuth.uid );
 
  const userSnapshot = await getDoc(userDocRef);

  if (! userSnapshot.exists()){
    const {displayName , email} = userAuth;
    const createdAt = new Date();

  try {
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt,
      ...additionalInformation
    })
  }
  catch (error){
  console.log('error in creating ', error.message)
  }
}

  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) =>{
  if (!email || !password) return;
 return await createUserWithEmailAndPassword(auth, email, password)
}

export const signinAuthUserWithEmailAndPassword = async (email, password) =>{
  if (!email || !password) return;
 return await signInWithEmailAndPassword(auth, email, password)
}

