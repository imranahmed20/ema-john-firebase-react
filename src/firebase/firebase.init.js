// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFtO4XUxoZ1acuvQt50zkScYo4XEL7Hj0",
    authDomain: "ema-john-firebase-react.firebaseapp.com",
    projectId: "ema-john-firebase-react",
    storageBucket: "ema-john-firebase-react.appspot.com",
    messagingSenderId: "181239891859",
    appId: "1:181239891859:web:dcfa423af64159899eca66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;