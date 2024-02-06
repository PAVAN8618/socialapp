

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0PHcpWhY130ToHL-IEdQE7Sl75lIZxDI",
  authDomain: "socialapp-953a9.firebaseapp.com",
  projectId: "socialapp-953a9",
  storageBucket: "socialapp-953a9.appspot.com",
  messagingSenderId: "1048787470488",
  appId: "1:1048787470488:web:0c78d50596ae0746f1a8ed"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();