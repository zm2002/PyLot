import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Animated, Dimensions, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ProgressBar = () => {
  const [numericProgress, setNumericProgress] = useState(0);
  const animatedValue = useState(new Animated.Value(0))[0];

  const screenWidth = Dimensions.get('window').width;
  const progressBarWidth = screenWidth * 0.8;
  const imageWidth = 20;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 100,
      duration: 2000,
      useNativeDriver: false
    }).start();

    const progressListener = animatedValue.addListener(animation => {
      setNumericProgress(animation.value);
    });

    return () => {
      animatedValue.removeListener(progressListener);
    };
  }, []);

  const widthInterpolated = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [0, progressBarWidth - imageWidth], // Subtract the image width so it aligns with the end of the progress bar
  });

  const imageTranslateInterpolated = animatedValue.interpolate({
    inputRange: [0, 120],
    outputRange: [-40, (progressBarWidth - imageWidth / 2) - 10], // Adjust the image to be centered on the end of the progress bar
  });

  return (
    <LinearGradient colors={['#00DCFF', '#023A68']}
      style={styles.fullScreen}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.centeredContainer}>
        <View style={[styles.container, { width: progressBarWidth }]}>
          <Animated.View style={[styles.bar, { width: widthInterpolated }]} />
          <Animated.Image
            source={require('../slugLogo.png')} // Adjust the path to your slug image
            style={[
              styles.icon,
              {
                // Apply animated value via transform for translateX
                transform: [{ translateX: imageTranslateInterpolated }]
              }
            ]}
            resizeMode="contain"
          />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    position: 'relative', // For the icon to be positioned absolutely
    height: 20,
    width: '80%',
    backgroundColor: '#ffff',
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
  },
  bar: {
    height: 20,
    backgroundColor: '#023A68',
    borderRadius: 10,
  },
  icon: {
    position: 'absolute',
    height: 100, // Set your desired height
    width: 100, // Set your desired width
  },
  textStyle: {
    position: 'absolute',
    alignSelf: 'center'
  },
});

export default ProgressBar;