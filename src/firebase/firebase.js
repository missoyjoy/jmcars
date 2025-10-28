
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAlNhddWx427pcW2A3cqMkM-LEl4yd5o8",
  authDomain: "jm-motors-98e4c.firebaseapp.com",
  projectId: "jm-motors-98e4c",
  storageBucket: "jm-motors-98e4c.firebasestorage.app",
  messagingSenderId: "849058436169",
  appId: "1:849058436169:web:fd2e79f18655a6f66b9b98",
  measurementId: "G-QZF33H0E6J",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export { auth, googleProvider };

