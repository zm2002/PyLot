import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const styles = StyleSheet.create({
  mainPage: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  div: {
    backgroundColor: '#ffffff',
    height: 844,
    overflow: 'hidden',
    position: 'relative',
    width: 390,
  },
  image: {
    height: 318,
    left: 0,
    position: 'absolute',
    top: 247,
    width: 390,
    resizeMode: 'cover',
  },
  westRemote: {
    height: 20,
    left: 83,
    position: 'absolute',
    top: 443,
    width: 29,
  },
  overlapGroup: {
    height: 28,
    position: 'relative',
    width: 27,
  },
  img: {
    height: 28,
    left: 2,
    position: 'absolute',
    top: 0,
    width: 23,
  },
  textWrapper: {
    color: '#000000',
    fontFamily: "Koh Santepheap-Bold, Helvetica",
    fontSize: 10,
    fontWeight: '700',
    left: 0,
    position: 'absolute',
    textAlign: 'center',
    top: 3,
    width: 27,
  },
  eastRemote: {
    height: 20,
    left: 235,
    position: 'absolute',
    top: 399,
    width: 29,
  },
  eastRemoteSpots: {
    color: '#000000',
    fontFamily: "Koh Santepheap-Bold, Helvetica",
    fontSize: 10,
    fontWeight: '700',
    left: 0,
    position: 'absolute',
    textAlign: 'center',
    top: 4,
    width: 27,
  },
  coreWest: {
    height: 20,
    left: 117,
    position: 'absolute',
    top: 289,
    width: 29,
  },
  artsLot: {
    height: 20,
    left: 149,
    position: 'absolute',
    top: 355,
    width: 29,
  },
  textWrapper2: {
    color: '#000000',
    fontFamily: "Koh Santepheap-Regular, Helvetica",
    fontSize: 30,
    fontWeight: '400',
    left: 87,
    position: 'absolute',
    textAlign: 'center',
    top: 565,
    width: 217,
  },
  textWrapper3: {
    color: '#000000',
    fontFamily: "Koh Santepheap-Regular, Helvetica",
    fontSize: 20,
    fontWeight: '400',
    left: 34,
    position: 'absolute',
    textDecorationLine: 'underline',
    top: 623,
    width: 119,
  },
  textWrapper4: {
    color: '#000000',
    fontFamily: "Koh Santepheap-Regular, Helvetica",
    fontSize: 20,
    fontWeight: '400',
    left: 312,
    position: 'absolute',
    top: 623,
    width: 30,
  },
  ellipse: {
    borderColor: '#000000',
    borderRadius: 17.5,
    borderWidth: 1,
    height: 31,
    left: 301,
    position: 'absolute',
    top: 621,
    width: 35,
  },
  ellipse2: {
    borderColor: '#000000',
    borderRadius: 17.5,
    borderWidth: 1,
    height: 31,
    left: 301,
    position: 'absolute',
    top: 670,
    width: 35,
  },
  ellipse3: {
    borderColor: '#000000',
    borderRadius: 17.5,
    borderWidth: 1,
    height: 31,
    left: 301,
    position: 'absolute',
    top: 719,
    width: 35,
  },
  textWrapper5: {
    color: '#000000',
    fontFamily: "Koh Santepheap-Regular, Helvetica",
    fontSize: 20,
    fontWeight: '400',
    left: 312,
    position: 'absolute',
    top: 672,
    width: 30,
  },
  textWrapper6: {
    color: '#000000',
    fontFamily: "Koh Santepheap-Regular, Helvetica",
    fontSize: 20,
    fontWeight: '400',
    left: 307,
    position: 'absolute',
    top: 721,
    width: 30,
  },
  ellipse4: {
    borderColor: '#000000',
    borderRadius: 17.5,
    borderWidth: 1,
    height: 31,
    left: 300,
    position: 'absolute',
    top: 769,
    width: 35,
  },
  textWrapper7: {
    color: '#000000',
    fontFamily: "Koh Santepheap-Regular, Helvetica",
    fontSize: 20,
    fontWeight: '400',
    left: 311,
    position: 'absolute',
    top: 770,
    width: 30,
  },
  ellipse5: {
    height: 40,
    left: 1291,
    position: 'absolute',
    top: 858,
    width: 164,
  },
  textWrapper8: {
    color: '#000000',
    fontFamily: "Koh Santepheap-Regular, Helvetica",
    fontSize: 20,
    fontWeight: '400',
    left: 31,
    position: 'absolute',
    textDecorationLine: 'underline',
    top: 672,
    width: 130,
  },
  textWrapper9: {
    color: '#000000',
    fontFamily: "Koh Santepheap-Regular, Helvetica",
    fontSize: 20,
    fontWeight: '400',
    left: 22,
    position: 'absolute',
    textAlign: 'center',
    textDecorationLine: 'underline',
    top: 723,
    width: 130,
  },
  textWrapper10: {
    color: '#000000',
    fontFamily: "Koh Santepheap-Regular, Helvetica",
    fontSize: 20,
    fontWeight: '400',
    left: 24,
    position: 'absolute',
    textAlign: 'center',
    textDecorationLine: 'underline',
    top: 774,
    width: 130,
  },
  rectangle: {
    backgroundColor: '#d9d9d9',
    height: 111,
    left: 135,
    position: 'absolute',
    top: 130,
    width: 120,
  },
  rectangle2: {
    backgroundColor: '#1154d7',
    height: 122,
    left: 0,
    position: 'absolute',
    top: 0,
    width: 390,
  },
  bananaSpot: {
    height: 73,
    left: 64,
    position: 'absolute',
    top: 35,
    width: 259,
  },
});

export const MainPage = () => {
  return (
    <View style={styles.mainPage}>
      <View style={styles.div}>
        <Image style={styles.image} source={require('./image-1.png')} />

        <View style={styles.westRemote}>
          <View style={styles.overlapGroup}>
            <Image style={styles.img} source={require('./west-remote-ellipse.png')} />
            <Text style={styles.textWrapper}>8</Text>
          </View>
        </View>

        <View style={styles.eastRemote}>
          <View style={styles.overlapGroup}>
            <Image style={styles.img} source={require('./east-remote-ellipse.png')} />
            <Text style={styles.eastRemoteSpots}>5</Text>
          </View>
        </View>

        <View style={styles.coreWest}>
          <View style={styles.overlapGroup}>
            <Image style={styles.img} source={require('./core-west-ellipse.png')} />
            <Text style={styles.textWrapper}>4</Text>
          </View>
        </View>

        <View style={styles.artsLot}>
          <View style={styles.overlapGroup}>
            <Image style={styles.img} source={require('./arts-lot-ellipse.png')} />
            <Text style={styles.textWrapper}>17</Text>
          </View>
        </View>

        <Text style={styles.textWrapper2}>Open Spots</Text>
        <Text style={styles.textWrapper3}>East Remote</Text>
        <Text style={styles.textWrapper4}>5</Text>

        <View style={styles.ellipse}></View>
        <View style={styles.ellipse2}></View>
        <View style={styles.ellipse3}></View>

        <Text style={styles.textWrapper5}>8</Text>
        <Text style={styles.textWrapper6}>17</Text>

        <View style={styles.ellipse4}></View>

        <Text style={styles.textWrapper7}>4</Text>
        <Image style={styles.ellipse5} source={require('./ellipse-8.png')} />

        <Text style={styles.textWrapper8}>West Remote</Text>
        <Text style={styles.textWrapper9}>Arts Lot</Text>
        <Text style={styles.textWrapper10}>West Core</Text>

        <View style={styles.rectangle}></View>
        <View style={styles.rectangle2}></View>

        <Image style={styles.bananaSpot} source={require('./banana-spot.png')} />
      </View>
    </View>
  );
};