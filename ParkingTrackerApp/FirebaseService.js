// FirebaseService.js
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAX52lk1_u3DWIzlGC7UDOgqFkPNf719qo",
    authDomain: "bananaspot-249e7.firebaseapp.com",
    projectId: "bananaspot-249e7",
    storageBucket: "bananaspot-249e7.appspot.com",
    messagingSenderId: "455136843141",
    appId: "1:455136843141:web:d5ba57f58f25de43c260ec",
    measurementId: "G-VQ5BYW0YGB"
  };

const firebaseApp = initializeApp(firebaseConfig);
const rootRef = ref(getDatabase(firebaseApp));

export const fetchDataFromFirebase = (setDataCallback) => {
  const dataRef = onValue(rootRef, (snapshot) => {
    const newData = snapshot.val();

    console.log(newData);

    setDataCallback(newData);
  });

  // Return the cleanup function to stop listening when needed
  return () => {
    dataRef.off();
  };
};
