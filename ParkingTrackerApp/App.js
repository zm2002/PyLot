import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from './Pages/MainPage';
import EastRemotePage from './Pages/EastRemote';
import WestRemotePage from './Pages/WestRemote';
import LoadingScreen from './Pages/Loading';
import ArtLotPage from './Pages/ArtLot';
import WestCorePage from './Pages/WestCore';

import ProgressBar from './Pages/AppBar';
// import WestRemotePage from './Pages/WestRemote';
// import ArtLotPage from './Pages/ArtLot';
import { convertJsonToLocationsArray } from './parkingDataConversion';

import { fetchDataFromFirebase } from './FirebaseService';
import EastRemote from './Pages/EastRemote';

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
  const eastRemote = locationsArray.find(location => location.name === "East Remote");


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen 
            name="Main" 
            options={{
              headerShown: false,
            }}
          >
            {(props) => <MainPage {...props} data={locationsArray} />}
        </Stack.Screen>
        
        <Stack.Screen 
          name="EastRemote" 
          options={{ title: 'East Remote' }}
        >
          {(props) => {
            return <EastRemote {...props} eastRemoteData={eastRemote} />;
          }}
        </Stack.Screen>

        {<Stack.Screen name="WestRemote" component={WestRemotePage} />}
        {<Stack.Screen name="ArtLot" component={ArtLotPage} />}
        {<Stack.Screen name="WestCore" component={WestCorePage} />}
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}