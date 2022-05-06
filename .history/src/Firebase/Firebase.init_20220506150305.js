import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:
  projectId:
  storageBucket:
  messagingSenderId: "956471402635",
  appId:
};

console.log(firebaseConfig);

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth