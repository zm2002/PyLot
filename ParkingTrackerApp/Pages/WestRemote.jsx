import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';

const screenWidth = Dimensions.get('window').width;

const data = {
  labels: ['1/14', '1/15', '1/16', '1/17', '1/18', '1/19', '1/20', 'invisible'],
  datasets: [{
    data: [20, 15, 10, 22, 15, 5, 20, 30, 40,50, 60, 20, 15, 10, 22, 15, 5, 20, 30, 40,50, 60,70]
  }]
};

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  color: (opacity = 30) => `rgba(0, 150, 253, ${opacity})`,
  labelColor: (opacity = 100) => `rgba(0, 100, 253, ${opacity})`,
  strokeWidth: 3, // optional, default 3
  verticleOffset: 20,
  propsForDots: {
    r: '6',
    strokeWidth: '1',
    stroke: '#0060ffd9'
  }
};

const WestRemote = ({parkingData}) => {
  const [isBottomReached, setIsBottomReached] = useState(false);

   // Function to format time in AM/PM
   const formatTime = (inputTime) => {
    const formattedTime = new Date(`2022-01-20T${inputTime}`);
    return formattedTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  };

  const { cars, time } = parkingData || {};

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
          fromZero={true}
          bezier
          style={{
            position: 'absolute',
            top: 10,
            marginVertical: 0,
            borderRadius: 20,
          }}
        />
      </ScrollView>
      <View style={[styles.spotsContainer, isBottomReached && styles.expandedContainer]}>
        <Text style={styles.spotsLeft}>Spots Left</Text>
        <Text style={styles.spotsNumber}>{cars}</Text>
        <Text style={styles.lastUpdated}>Last Updated: {formatTime(time)}</Text>
        {isBottomReached && (
          <>
            <Text style={styles.bestTimeText}>Best time to park here today</Text>
            <Text style={styles.bestTime}>11:00AM</Text>
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

export default WestRemote;
