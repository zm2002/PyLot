import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { height } = Dimensions.get('window'); // Get the full height of the screen

const MainPage = () => {
  const navigation = useNavigation(); // Hook to access navigation prop
  // Dummy data for the list items
  const locations = [
    { name: 'East Remote', count: 3 },
    { name: 'West Remote', count: 8 },
    { name: 'Arts Lot', count: 17 },
    { name: 'West Core', count: 4 },
    // ... add more locations if necessary
  ];

  const navigateToLocation = (locationName) => {
    // Navigation name should not have spaces, so replace them with an empty string
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
      <View style={styles.locationListContainer}>
        <ScrollView style={styles.locationList}>
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
      </View>
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
    height: height * 0.7, // Adjust the height as needed
  },
  locationListContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  locationList: {
    backgroundColor: '#333',
  },
  locationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#555',
  },
  locationName: {
    color: '#fff',
    fontSize: 16,
  },
  locationCount: {
    color: '#fff',
    fontSize: 16,
  },
  textRed: {
    color: 'red',
  },
  textDefault: {
    color: '#fff',
  },
});

export default MainPage;
