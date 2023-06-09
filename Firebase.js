// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7fzFkC6Rtk_MG90khiYPh9qHKMZROKsY",
  authDomain: "bus-app-907a8.firebaseapp.com",
  projectId: "bus-app-907a8",
  storageBucket: "bus-app-907a8.appspot.com",
  messagingSenderId: "790134692425",
  appId: "1:790134692425:web:e9d40ee988630849db3d98",
  measurementId: "G-QRSDG2NWRB",
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);

export const db = getFirestore(firebaseApp);





// const getDatabase = getDatabase(firebaseApp);


//database 2
const firebaseConfig2 = {
  apiKey: "AIzaSyB8XQ8OMMDZvXBmtQRLW0EmvYUPG71hSTQ",
  authDomain: "bus-app-379518.firebaseapp.com",
  projectId: "bus-app-379518",
  storageBucket: "bus-app-379518.appspot.com",
  messagingSenderId: "182875106915",
  appId: "1:182875106915:web:95280d94a223b9f8885256",
  // databaseURL: "https://bus-app-379518-default-rtdb.firebaseio.com/",
};
const firebaseApp2 = initializeApp(firebaseConfig2, 'SECONDARY_APP');
export const db2 = getFirestore(firebaseApp2);





const firebaseConfig3 = {
  apiKey: "AIzaSyB2da72Jz7hn8DV9xokJHutgxEf4-u7w9Y",
  authDomain: "driver-tracking-c410b.firebaseapp.com",
  projectId: "driver-tracking-c410b",
  storageBucket: "driver-tracking-c410b.appspot.com",
  messagingSenderId: "671190723684",
  appId: "1:671190723684:web:2c66e9e37aee741a51c371",
  measurementId: "G-1WE72P2B2D",
  databaseURL: "https://driver-tracking-c410b-default-rtdb.firebaseio.com",
};

const firebaseApp3 = initializeApp(firebaseConfig3, 'TERNARY_APP');
export const db3 = getFirestore(firebaseApp3);
export const firebaseAuth3 = getAuth(firebaseApp3);
export const database = getDatabase(firebaseApp3);





