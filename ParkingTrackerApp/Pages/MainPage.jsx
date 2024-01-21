import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
  Dimensions,
  PanResponder,
} from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import MapView from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');
const darkMapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8ec3b9"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1a3646"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#64779e"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#334e87"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6f9ba5"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3C7680"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#304a7d"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2c6675"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#255763"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#b0d5ce"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3a4762"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#0e1626"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#4e6d70"
      }
    ]
  }
];

SplashScreen.preventAutoHideAsync();

const MainPage = ({ data }) => {
  const navigation = useNavigation();
  const [expanded, setExpanded] = useState(false);
  const listHeightAnim = useRef(new Animated.Value(240)).current; // Initial height for 2 items
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {
        dy: listHeightAnim, // Bind dy (delta y) to listHeightAnim
      }], { useNativeDriver: false }),
      onPanResponderRelease: (e, gestureState) => {
        if (gestureState.dy < -100) { // Threshold for expand
          Animated.spring(listHeightAnim, {
            toValue: height, // Full height for expanded view
            useNativeDriver: false,
          }).start(() => setExpanded(true));
        } else if (gestureState.dy > 100 && expanded) { // Threshold for collapse
          Animated.spring(listHeightAnim, {
            toValue: 240, // Initial height for collapsed view
            useNativeDriver: false,
          }).start(() => setExpanded(false));
        }
      },
    })
  ).current;


  // console.log("inside MainPage....");
  // console.log(data);
  const locations = data
    .filter(item => item.name !== "Graphing") // Exclude "Graphing"
    .map(item => ({
      name: item.name,
      count: item.cars !== undefined ? item.cars : 0
    }));
  
  // console.log(formattedData);
  
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Montserrat': require('../assets/Montserrat/static/Montserrat-SemiBold.ttf'), // Replace with the correct path
      });
      setFontsLoaded(true);
      SplashScreen.hideAsync(); // Hide the splash screen after fonts are loaded
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // Or some loading component
  }

  // const locations = [
  //   { name: 'East Remote', count: 3 },
  //   { name: 'West Remote', count: 8 },
  //   { name: 'Arts Lot', count: 17 },
  //   { name: 'West Core', count: 4 },
  //   // ... add more locations if necessary
  // ];

  const navigateToLocation = (locationName) => {
    const screenName = locationName.replace(/\s+/g, '');
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Banana Spot</Text>
        </View>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Image source={require('../assets/map.png')} style={styles.map} resizeMode="cover" />
      </ScrollView>

      <MapView
      style={styles.map}
      customMapStyle={darkMapStyle}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      />
      <Animated.View
        style={[styles.locationListContainer, { height: listHeightAnim }]}
        {...panResponder.panHandlers}
      >
        <ScrollView style={styles.locationList} contentContainerStyle={styles.locationContent}>
          {locations.map((location, index) => {
            const locationTextStyle = location.count < 5 ? styles.textRed : styles.textBlue;
            return (
              <TouchableOpacity
                key={index.toString()}
                style={styles.locationItem}
                onPress={() => navigateToLocation(location.name)}
              >
                <Text style={[styles.locationName, locationTextStyle]}>
                  {location.name}
                </Text>
                <Text style={[styles.locationCount, locationTextStyle]}>
                  {location.count}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#000',
  },
  scrollView: {
    flex: 1,
  },
  banner: {
    backgroundColor: '#000',
    paddingVertical: 10,
  },
  bannerText: {
    textAlign: 'center',
    color: '#fff',
    top: 50,
    fontSize: 24,
    fontWeight: 'bold',
  },
  logo: {
    width: 50,
    height: 50,
    top: -8,
    left: -7,
    margin: 10,
  },
  map: {
    position: 'absolute',
    top: 100,
    width: '100%',
    resizeMode: 'contain',
    height: height * 0.7,
  },
  locationListContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  locationList: {
    backgroundColor: '#333',
  },
  locationContent: {
    paddingBottom: 40,
  },
  locationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#555',
    height: 120,
  },
  locationName: {
    color: '#fff',
    fontStyle: 'normal',
    fontFamily: 'Montserrat',
    fontSize: 40,
  },
  locationCount: {
    color: '#fff',
    fontFamily: 'Montserrat',
    fontSize: 40,
  },
  textBlue: {
    color: '#61DBFB',
  },
  textRed: {
    color: 'red',
  },
  textDefault: {
    color: '#fff',
  },
  modalView: {
    marginTop: 120,
    flex: 1,
    backgroundColor: '#333',
  },
  fullList: {
    width: '100%',
  },
});

export default MainPage;
