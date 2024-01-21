import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Image } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from './Pages/MainPage';
import EastRemotePage from './Pages/EastRemote';
import WestRemotePage from './Pages/WestRemote';
import LoadingScreen from './Pages/Loading';
import ArtsLotPage from './Pages/ArtLot';
import WestCorePage from './Pages/WestCore';
import slugLogo from './slugLogo.png'; // Adjust the path to your image accordingly
// import EastRemoteSwipe from './Pages/EastRemoteSwipe';

// Firebase imports
import { convertJsonToLocationsArray } from './parkingDataConversion';
import { fetchDataFromFirebase } from './FirebaseService';

import ProgressBar from './Pages/AppBar';
// import WestRemotePage from './Pages/WestRemote';
// import ArtLotPage from './Pages/ArtLot';

// Import other location pages here

const Stack = createNativeStackNavigator();

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const cleanupFunction = fetchDataFromFirebase(setData);

    // Cleanup the listener when the component unmounts
    return cleanupFunction;
  }, []);

  const locationsArray = data ? convertJsonToLocationsArray(data) : [];
  const eastRemoteData = locationsArray.find(location => location.name === "East Remote");
  const westRemoteData = locationsArray.find(location => location.name === "West Remote");
  const artsLotData = locationsArray.find(location => location.name === "Arts Lot");
  const westCoreData = locationsArray.find(location => location.name === "West Core");



  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={{
      headerStyle: {
        backgroundColor: '#000', // Set your header color here
        color: '#fff',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 25,
      },
      headerTintColor: 'white',
      headerBackTitleVisible: false,
      headerRight: () => (
        <Image
          source={slugLogo}
          style={{
            width: 100,
            height: 100,
            position: 'absolute', 
            top: -45,
            right: -30,
            zIndex: 10,
          }} // Adjust the size and margin as needed
        />
      ),
      }}>
        <Stack.Screen
          name="Loading Screen"
          options={{ headerShown: false }}
        >
          {(props) => {
            return <LoadingScreen {...props} locationsArray={locationsArray} />;
          }}
        </Stack.Screen>

        <Stack.Screen 
          name="EastRemote" 
          options={{ title: 'East Remote', headerBackTitle: null }}
        >
          {(props) => {
            return <EastRemotePage {...props} parkingData={eastRemoteData} />;
          }}
        </Stack.Screen>

        <Stack.Screen 
          name="WestRemote" 
          options={{ title: 'West Remote', headerBackTitle: null }}
        >
          {(props) => {
            return <WestRemotePage {...props} parkingData={westRemoteData} />;
          }}
        </Stack.Screen>

        <Stack.Screen 
          name="ArtsLot" 
          options={{ title: 'Art Lot' }}
        >
          {(props) => {
            return <ArtsLotPage {...props} parkingData={artsLotData} />;
          }}
        </Stack.Screen>

        <Stack.Screen 
          name="WestCore" 
          options={{ title: 'West Core' }}
        >
          {(props) => {
            return <WestCorePage {...props} parkingData={westCoreData} />;
          }}
        </Stack.Screen>

      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}