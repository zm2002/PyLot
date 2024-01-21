import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from './Pages/MainPage';
import EastRemotePage from './Pages/EastRemote';
import WestRemotePage from './Pages/WestRemote';
import LoadingScreen from './Pages/Loading';
import ArtsLotPage from './Pages/ArtLot';
import WestCorePage from './Pages/WestCore';
import EastRemoteSwipe from './Pages/EastRemoteSwipe';

import ProgressBar from './Pages/AppBar';
// import WestRemotePage from './Pages/WestRemote';
// import ArtLotPage from './Pages/ArtLot';

// Import other location pages here

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={LoadingScreen}
          options={{ headerShown: false }}
        />
        {/* Add more Stack.Screen for each location page */}
        {/* Example: */}
        {<Stack.Screen name="EastRemote" component={EastRemotePage} options={{ title: 'East Remote' }} />}
        {<Stack.Screen name="WestRemote" component={WestRemotePage} options={{ title: 'West Remote' }}/>}
        {<Stack.Screen name="ArtsLot" component={ArtsLotPage} options={{ title: 'Arts Lot' }}/>}
        {<Stack.Screen name="WestCore" component={WestCorePage} options={{ title: 'West Core' }}/>}
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}