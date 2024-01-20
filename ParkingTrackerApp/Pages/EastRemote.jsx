import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import { Svg, Path } from 'react-native-svg';

export const EastRemote = () => {
    return (
    		<View style={styles.eastRemote}>
      			{/* component component1 */}
      			<View style={styles.component1}>
        				{/* Vigma RN:: can be replaced with <_eastRemote  /> */}
        				<View style={styles._eastRemote}>
          					<Text style={styles.__eastRemote}>
            						{`East Remote`}
          					</Text>
        				</View>
        				<ImageBackground style={styles.graphsDays1} source={{uri: /* dummy image */ 'https://dummyimage.com/346x252/000/fff.jpg'}}/>
        				<Text style={styles.openSpots}>
          					{`Open Spots`}
        				</Text>
        				<Text style={styles.myVar}>
          					{`3`}
        				</Text>
<Svg style={styles.ellipse2} width="145" height="148" viewBox="0 0 145 148" fill="none" >
<Path d="M144.5 74C144.5 114.603 112.255 147.5 72.5 147.5C32.7451 147.5 0.5 114.603 0.5 74C0.5 33.3974 32.7451 0.5 72.5 0.5C112.255 0.5 144.5 33.3974 144.5 74Z" stroke="black"/>
</Svg>

        				<Text style={styles.lastUpdated113915pm}>
          					{`Last Updated: 11:39:15pm`}
        				</Text>
<Svg style={styles.ellipse7} width="60" height="49" viewBox="0 0 60 49" fill="none" >
<Path d="M59.5 24.5C59.5 37.6649 46.3918 48.5 30 48.5C13.6082 48.5 0.5 37.6649 0.5 24.5C0.5 11.3351 13.6082 0.5 30 0.5C46.3918 0.5 59.5 11.3351 59.5 24.5Z" stroke="black"/>
</Svg>

        				<View style={styles.group2}>
          					<View style={styles.group1}>
            						<Text style={styles.back}>
              							{`Back`}
            						</Text>
          					</View>
        				</View>
      			</View>
    		</View>
    )
}

const styles = StyleSheet.create({
  	eastRemote: {
    flexShrink: 0,
    height: 844,
    width: 390,
    backgroundColor: "rgba(255, 255, 255, 1)",
    alignItems: "flex-start",
    rowGap: 0
},
  	component1: {
    position: "absolute",
    flexShrink: 0,
    top: 20,
    height: 803,
    left: 10,
    width: 367,
    alignItems: "flex-start",
    rowGap: 0
},
  	_eastRemote: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    bottom: 713,
    left: 0,
    right: 0,
    alignItems: "flex-start",
    rowGap: 0
},
  	__eastRemote: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    textAlign: "center",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Koh Santepheap",
    fontSize: 60,
    fontWeight: "400",
    letterSpacing: 0,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
        width: 0,
        height: 4
    },
    textShadowRadius: 4
},
  	graphsDays1: {
    position: "absolute",
    flexShrink: 0,
    top: 127,
    right: 9,
    bottom: 424,
    left: 12
},
  	openSpots: {
    position: "absolute",
    flexShrink: 0,
    top: 416,
    right: 78,
    bottom: 340,
    left: 87,
    textAlign: "center",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Koh Santepheap",
    fontSize: 30,
    fontWeight: "400",
    letterSpacing: 0
},
  	myVar: {
    position: "absolute",
    flexShrink: 0,
    top: 527,
    right: 83,
    bottom: 104,
    left: 83,
    textAlign: "center",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Koh Santepheap",
    fontSize: 60,
    fontWeight: "400",
    letterSpacing: 0
},
  	ellipse2: {
    position: "absolute",
    flexShrink: 0,
    top: 497,
    right: 111,
    bottom: 158,
    left: 111,
    overflow: "visible"
},
  	lastUpdated113915pm: {
    position: "absolute",
    flexShrink: 0,
    top: 699,
    right: 46,
    bottom: 68,
    left: 56,
    textAlign: "center",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Koh Santepheap",
    fontSize: 20,
    fontWeight: "400",
    letterSpacing: 0
},
  	ellipse7: {
    position: "absolute",
    flexShrink: 0,
    top: 754,
    right: 297,
    bottom: 0,
    left: 10,
    overflow: "visible"
},
  	group2: {
    position: "absolute",
    flexShrink: 0,
    top: 771,
    height: 9,
    left: 25,
    width: 29
},
  	group1: {
    position: "absolute",
    flexShrink: 0,
    height: 9,
    width: 29
},
  	back: {
    position: "absolute",
    flexShrink: 0,
    width: 29,
    height: 9,
    textAlign: "center",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Koh Santepheap",
    fontSize: 10,
    fontWeight: "400",
    letterSpacing: 0
}
})