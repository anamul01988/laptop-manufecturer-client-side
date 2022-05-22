import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// const firebaseConfig = {
//   apiKey: "AIzaSyD-f1Z2LtX13fD9QvLcEOD2kCvn5urvPTg",
//   authDomain: "laptop-menufecture.firebaseapp.com",
//   projectId: "laptop-menufecture",
//   storageBucket: "laptop-menufecture.appspot.com",
//   messagingSenderId: "834635494476",
//   appId: "1:834635494476:web:99e04345a18823726cb0e9"
// };
// const app = initializeApp(firebaseConfig);


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY ,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN ,
    projectId: process.env.REACT_APP_PROJECT_ID ,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET ,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID ,
    appId: process.env.REACT_APP_APP_ID 
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;