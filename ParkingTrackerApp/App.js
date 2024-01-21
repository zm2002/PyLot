import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from './Pages/MainPage';
import EastRemotePage from './Pages/EastRemote';
import WestRemotePage from './Pages/WestRemote';
import LoadingScreen from './Pages/Loading';
import ArtsLotPage from './Pages/ArtLot';
import WestCorePage from './Pages/WestCore';
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
  const [graphingData, setGraphingData] = useState(null);


  useEffect(() => {
    const cleanupFunction = fetchDataFromFirebase(setData, setGraphingData);

    // Cleanup the listener when the component unmounts
    return cleanupFunction;
  }, []);

  const bruh = graphingData['Arts Lot'];
  console.log(bruh);

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
      },
      headerTintColor: 'white',
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
          options={{ title: 'East Remote' }}
        >
          {(props) => {
            return <EastRemotePage {...props} parkingData={eastRemoteData} />;
          }}
        </Stack.Screen>

        <Stack.Screen 
          name="WestRemote" 
          options={{ title: 'West Remote' }}
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
            return <ArtsLotPage {...props} parkingData={artsLotData} graphingData={graphingData['Arts Lot']} />;
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