import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';

const screenWidth = Dimensions.get('window').width;

const data = {
  labels: ['10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM'],
  datasets: [{
    data: [2, 5, 10, 22, 15, 5]
  }]
};

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
};

const EastRemote = () => {
  const [isBottomReached, setIsBottomReached] = useState(false);

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const contentHeight = event.nativeEvent.contentSize.height;
    const height = event.nativeEvent.layoutMeasurement.height;
    
    // Check if the bottom has been reached
    if (offsetY >= contentHeight - height - 40) { // 20 is a buffer to start showing the best time a bit before the bottom
      setIsBottomReached(true);
    } else {
      setIsBottomReached(false);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.scrollContainer}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <LineChart
          data={data}
          width={screenWidth}
          height={360}
          chartConfig={chartConfig}
          bezier
        />
      </ScrollView>
      <View style={[styles.spotsContainer, isBottomReached && styles.expandedContainer]}>
        <Text style={styles.spotsLeft}>Spots Left</Text>
        <Text style={styles.spotsNumber}>5</Text>
        <Text style={styles.lastUpdated}>Last Updated: 11:39:15pm</Text>
        {isBottomReached && (
          <>
            <Text style={styles.bestTimeText}>Best time to park here today</Text>
            <Text style={styles.bestTime}>1:00PM</Text>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollContainer: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 200, // Adjust this value to ensure the black box is at the screen's bottom when scrolled down
  },
  header: {
    backgroundColor: '#61DBFB',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  spotsContainer: {
    backgroundColor: '#000',
    alignItems: 'center',
    paddingVertical: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingTop: 30, // Initial padding
    paddingBottom: 10, // Initial padding
  },
  expandedContainer: {
    paddingBottom: 80, // You can adjust this value as needed
  },
  spotsLeft: {
    color: '#fff',
    fontSize: 18,
  },
  spotsNumber: {
    color: '#FFD700',
    fontSize: 48,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  lastUpdated: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 20,
  },
  bestTimeText: {
    color: '#fff',
    fontSize: 18,
  },
  bestTime: {
    color: '#FFD700',
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default EastRemote;
