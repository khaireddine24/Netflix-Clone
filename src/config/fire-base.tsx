import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSIhrK2ggn9a7qnbe6t4_z5z79t9R4U7E",
  authDomain: "netflix-clone-1c6ec.firebaseapp.com",
  projectId: "netflix-clone-1c6ec",
  storageBucket: "netflix-clone-1c6ec.appspot.com",
  messagingSenderId: "908269972585",
  appId: "1:908269972585:web:71bdf7b8ea43d2d389c6f8",
  measurementId: "G-4GDH35ZFNQ"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
