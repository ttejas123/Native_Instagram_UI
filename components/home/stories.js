import React from 'react'

import {
  StyleSheet,
  View, Text, Image, TouchableOpacity, ScrollView
} from 'react-native';
import { USER } from './data.js'

const stories = () => {
    return (
      <View style={styles.container}>
      	<ScrollView
      	  horizontal
      	  showsHorizontalScrollIndicator = {false}
      	  style={styles.scrollView}>
      		{USER.map((val, index) => {
	      		return(
	      				<View key={index}>
		      				<TouchableOpacity>
		      					<View style={styles.storyMain}>
		      						<View style={styles.storyHolder}>
			      						<Image source={{uri: val.img}} style={styles.story} />
			      					</View>
			      					<Text style={styles.text}>{val.user.length > 11 ? val.user.slice(0, 10).toLowerCase()+'...': val.user.toLowerCase()}</Text>
		      					</View>
					      	</TouchableOpacity>
				      	</View>
	      			)
	      	})}  
      	</ScrollView>
      	
      </View>
    );
}

const styles = StyleSheet.create({
	text:{
		color: 'white'
	},
	container:{
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row'
	},
	story:{
		width: 72,
		height: 72,
		borderRadius: 50,
		margin : 3,
	},
	storyHolder:{
		borderWidth: 2,
		justifyContent : 'center',
		alignItems  :'center',
		borderColor: '#ff3d5f',
		borderRadius: 50
	},
	storyMain: {
		margin: 3,
		alignItems : 'center'
	}
});


export default stories;