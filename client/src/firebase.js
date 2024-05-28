// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTRWrnd1xEXD9D4LwWwehSz-S8NweX1oU",
  authDomain: "swio-aca80.firebaseapp.com",
  projectId: "swio-aca80",
  storageBucket: "swio-aca80.appspot.com",
  messagingSenderId: "749795885817",
  appId: "1:749795885817:web:ffc799ed40c952a961d828",
  databaseURL: "https://swio-aca80-default-rtdb.asia-southeast1.firebasedatabase.app",
  measurementId: "G-M298WDXZ1K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getDatabase(app);