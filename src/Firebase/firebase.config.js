// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCck-2c6kQLwz4JREgkNtzTFjJ-MamNwNg",
  authDomain: "module-52-dragon-3792f.firebaseapp.com",
  projectId: "module-52-dragon-3792f",
  storageBucket: "module-52-dragon-3792f.appspot.com",
  messagingSenderId: "358553225961",
  appId: "1:358553225961:web:79f5a22aa0727f624e7e78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;