import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from './Pages/MainPage';
import EastRemotePage from './Pages/EastRemote';
// import WestRemotePage from './Pages/WestRemote';
// import ArtLotPage from './Pages/ArtLot';

import { fetchDataFromFirebase } from './FirebaseService';

// Import other location pages here

const Stack = createNativeStackNavigator();

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const cleanupFunction = fetchDataFromFirebase(setData);

    // Cleanup the listener when the component unmounts
    return cleanupFunction;
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen 
          name="Main" 
          component={MainPage}
          options={{
            headerShown: false, // This hides the header for the MainPage
          }}
        />
        {/* Add more Stack.Screen for each location page */}
        {/* Example: */}
        {<Stack.Screen name="EastRemote" component={EastRemotePage} options={{ title: 'East Remote' }} />}
        {/* {<Stack.Screen name="WestRemote" component={WestRemotePage} />}
        {<Stack.Screen name="ArtLot" component={ArtLotPage} />}
        {<Stack.Screen name="WestCore" component={WestCorePage} />} */}
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}