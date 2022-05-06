import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBZRaVc9gk8DZWlj-zy7vuN4BPxF-Z5ZEk",
  authDomain: "laptop-03.firebaseapp.com",
  projectId: "laptop-03",
  storageBucket: "laptop-03.appspot.com",
  messagingSenderId: "956471402635",
  appId: "1:956471402635:web:cb13c5de97b244b84d348e"
};

console.log(fire);

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth