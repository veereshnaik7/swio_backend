
const { initializeApp } = require('firebase/app');
const { getDatabase } = require('firebase/database');


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


const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);

module.exports = { firebaseApp, db };
