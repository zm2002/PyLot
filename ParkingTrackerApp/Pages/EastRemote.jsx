import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions, TouchableOpacity, TouchableWithoutFeedback, } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';
import SwipeUpDown from 'react-native-swipe-up-down';

const screenWidth = Dimensions.get('window').width;

const data = {
  labels: ['1/14', '1/15', '1/16', '1/17', '1/18', '1/19', '1/20', 'invisible'],
  datasets: [{
    data: [20, 15, 10, 22, 15, 5, 20, 30, 40, 50, 60, 20, 15, 10, 22, 15, 5, 20, 30, 40, 50, 60, 70]
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

const EastRemote = () => {
  const swipeUpDownRef = useRef();
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
    <View style={styles.containerScroll}>
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
        }}>
      </LineChart>
      <SwipeUpDown
        ref={swipeUpDownRef}
        itemMini={(show) => (
          <View style={[styles.miniItem, { alignItems: 'center', justifyContent: 'center' }]}>
            <View
              style={{
                backgroundColor: "#242424",
                height: 300,
              }}>
              <Text style={styles.spotsLeft}>Spots Left</Text>
              <Text style={styles.spotsNumber}>5</Text>
              <Text style={styles.lastUpdated}>Last Updated: 11:39:15pm</Text>
            </View>
          </View>
        )}
        itemFull={(close) => (
          <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <View
                style={{
                  backgroundColor: "#242424",
                  height: 300,
                }}>
                <Text style={[styles.spotsLeft, styles.align]}>Spots Left</Text>
                <Text style={styles.spotsNumber}>5</Text>
                <Text style={styles.lastUpdated}>Last Updated: 11:39:15pm</Text>
              </View>
              <View
                style={{
                  backgroundColor: "#2F2F2F",
                  height: 200,
                }}>
                <Text style={styles.bestTimeText}>Best time to park here today</Text>
                <Text style={styles.bestTime}>1:00PM</Text>
              </View>
            </View>
            {/* </TouchableWithoutFeedback> */}
          </ScrollView>
        )}
        animation="linear"
        extraMarginTop={4}
        swipeHeight={400}
        disablePressToShow={true} // Press item mini to show full
        style={{ backgroundColor: "#2F2F2F" }} // style for swipe
      />
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
    position: 'absolute',
    alignItems: 'center',
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
  containerScroll: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});

export default EastRemote;
