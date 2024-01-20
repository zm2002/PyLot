import firebase from 'firebase';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX52lk1_u3DWIzlGC7UDOgqFkPNf719qo",
  authDomain: "bananaspot-249e7.firebaseapp.com",
  projectId: "bananaspot-249e7",
  storageBucket: "bananaspot-249e7.appspot.com",
  messagingSenderId: "455136843141",
  appId: "1:455136843141:web:d5ba57f58f25de43c260ec",
  measurementId: "G-VQ5BYW0YGB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase;