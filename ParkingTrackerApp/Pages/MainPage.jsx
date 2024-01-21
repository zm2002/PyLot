import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Modal,
  PanResponder,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const customMapStyle = [
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

const MainPage = () => {
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
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const panResponder = useRef(PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      if (gestureState.dy < -50) { // Detect upward swipe
        setModalVisible(true);
      }
    },
  })).current;
  const [fontsLoaded, setFontsLoaded] = useState(false);

  

  // Dummy data for the list items
  const locations = [
    { name: 'East Remote', count: 3 },
    { name: 'West Remote', count: 8 },
    { name: 'Arts Lot', count: 17 },
    { name: 'West Core', count: 4 },
    // ... add more locations if necessary
  ];

  const itemHeight = 120; // Assuming each item's height is 120 based on padding and font size

  const navigateToLocation = (locationName) => {
    const screenName = locationName.replace(/\s+/g, '');
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <Text> </Text>
      <MapView
        style={styles.map2}
        customMapStyle={customMapStyle}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: 36.9905,
          longitude: -122.0584,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 36.991039, longitude: -122.053130 }}
          style={{ zIndex: 1 }}

        >
          <View style={{ backgroundColor: '#000' }}>

            <Image source={require('../assets/pin.png')} style={{ width: 30, height: 35 }} />
          </View>
        </Marker>

        <Marker
          coordinate={{ latitude: 36.991039, longitude: -122.053130 }}
          style={{ zIndex: 2 }}

        >
          <View style={{ backgroundColor: '#000', paddingTop: 11, paddingRight: 6 }}>

            <Text style={{ color: "black", position: 'relative', top: -14 }}>2</Text>
          </View>
        </Marker>

      </MapView>
      <ScrollView style={styles.scrollView}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Banana Spot</Text>
        </View>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Image source={require('../assets/map.png')} style={styles.map} />
      </ScrollView>

      <View
        style={[styles.locationListContainer, { height: itemHeight * 2 }]}
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
      </View>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.returnButton}
          onPress={() => setModalVisible(false)}
        >
          <Text style={styles.returnButtonText}>Return</Text>
        </TouchableOpacity>
        <ScrollView style={styles.fullList}>
          {locations.map((location, index) => {
            const locationTextStyle = location.count < 5 ? styles.textRed : styles.textDefault;
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
      </Modal>
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
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#000',
  },
  mapView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  map: {
    position: 'absolute',
    top: 100,
    width: '100%',
    resizeMode: 'contain',
    height: height * 0.7,
    zIndex: -1,
  },
  map2: {
    position: 'absolute',
    top: 100,
    width: '100%',
    resizeMode: 'contain',
    height: height * 0.7,
    zIndex: 5,
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
    // fontFamily: 'Montserrat',
    fontSize: 40,
  },
  locationCount: {
    color: '#fff',
    // fontFamily: 'Montserrat',
    fontSize: 40,
  },
  maps: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  textRed: {
    color: 'red',
  },
  textBlue: {
    color: '#61DBFB',
  },
  textDefault: {
    color: '#61DBFB',
  },
  modalView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  fullList: {
    width: '100%',
  },
  returnButton: {
    padding: 20,
    backgroundColor: '#61DBFB',
    alignItems: 'center',
  },
  returnButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default MainPage;
