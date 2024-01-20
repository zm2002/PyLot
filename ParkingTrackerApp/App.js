import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
import { MainPage } from './Pages/MainPage';

const firebaseConfig = {
  apiKey: "AIzaSyAX52lk1_u3DWIzlGC7UDOgqFkPNf719qo",
  authDomain: "bananaspot-249e7.firebaseapp.com",
  projectId: "bananaspot-249e7",
  storageBucket: "bananaspot-249e7.appspot.com",
  messagingSenderId: "455136843141",
  appId: "1:455136843141:web:d5ba57f58f25de43c260ec",
  measurementId: "G-VQ5BYW0YGB"
};


  // initialize the app
  const firebaseApp = initializeApp(firebaseConfig);

  // Reference to the root of the database
  const rootRef = ref(getDatabase(firebaseApp));

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const dataRef = onValue(rootRef, (snapshot) => {
      const newData = snapshot.val();
      setData(newData);
      console.log(newData.West_Core.data)
    });

    // Cleanup the listener when the component unmounts
    return () => {
      dataRef.off();
    };
  }, []); // Empty dependency array ensures the effect runs only once (on mount)

  // console.log(data11);

  return (
    <View style={styles.container}>
      <MainPage/>
      <Text>Data from Firebase:</Text>
      {data && data.West_Core ? (
        <View>
          {/* Render data from West_Core here */}
          <Text>Cars: {data.West_Core.data.cars}</Text>
          <Text>Time: {data.West_Core.data.time}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
};

