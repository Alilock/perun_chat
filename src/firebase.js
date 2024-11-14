import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyDVvmvb4AWYBYc0saIVWrBShNPwi7LJokc",
    authDomain: "fir-app-545ef.firebaseapp.com",
    databaseURL: "https://fir-app-545ef-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fir-app-545ef",
    storageBucket: "fir-app-545ef.firebasestorage.app",
    messagingSenderId: "455495746649",
    appId: "1:455495746649:web:4b18d1b2a5ec5105565d48",
    measurementId: "G-15XZ9EPRNL"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const realTimeDB = getDatabase(app);
export const signInWithGoogle = async () => {
    try {
        const response = await signInWithPopup(auth, googleProvider);
        console.log('User signed in with google', response.user);
    } catch (error) {
        console.log('Error signing in with google', error);
    }
}