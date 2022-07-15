import {getFirestore} from 'firebase/firestore'
import { initializeApp } from "firebase/app";




// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2aHfLyUX0VHblLmDplSHuqgW0r3X_pnQ",
    authDomain: "house-marketplace-web-app.firebaseapp.com",
    projectId: "house-marketplace-web-app",
    storageBucket: "house-marketplace-web-app.appspot.com",
    messagingSenderId: "664802803434",
    appId: "1:664802803434:web:c82c08b6943d4ff7512193",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()