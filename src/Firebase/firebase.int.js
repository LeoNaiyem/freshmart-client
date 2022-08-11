import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeFireBase = () => {
  return initializeApp(firebaseConfig);
};

export default initializeFireBase;
