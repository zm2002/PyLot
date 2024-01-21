import React, { useState, useRef } from 'react';
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

const { width, height } = Dimensions.get('window');

const MainPage = () => {
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
      <ScrollView style={styles.scrollView}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>Banana Spot</Text>
        </View>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Image source={require('../assets/map.png')} style={styles.map} resizeMode="cover" />
      </ScrollView>

      <View
        style={[styles.locationListContainer, { height: itemHeight * 2 }]}
        {...panResponder.panHandlers}
      >
        <ScrollView style={styles.locationList} contentContainerStyle={styles.locationContent}>
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
    fontSize: 40,
  },
  locationCount: {
    color: '#fff',
    fontSize: 40,
  },
  textRed: {
    color: 'red',
  },
  textDefault: {
    color: '#fff',
  },
  modalView: {
    flex: 1,
    backgroundColor: '#333',
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
