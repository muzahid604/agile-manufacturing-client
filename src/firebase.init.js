// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyClYMtvDEfnsPu_PdUivD2co7mkkt3Y6CQ",
    authDomain: "agile-manufacturing.firebaseapp.com",
    projectId: "agile-manufacturing",
    storageBucket: "agile-manufacturing.appspot.com",
    messagingSenderId: "1097613889368",
    appId: "1:1097613889368:web:058b973e6b7f1f78f19f2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;