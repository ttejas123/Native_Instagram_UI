import React from 'react'

import {
  StyleSheet,
  View, Text, Image, TouchableOpacity, ScrollView
} from 'react-native';
import { USER } from './data.js'
const stories = (props) => {
    return (
      <View style={styles.container}>
      	<View style={styles.postOwner}>
      		<Image source={{uri: props.img}} style={styles.story} />  					
			    <Text style={styles.text}>{props.name}</Text>
      	</View>
      	<TouchableOpacity style={{alignItems : 'center'}}>
      		<Image style={styles.logo} source = {require('../../assets/more1.png')} />				
      	</TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
	text:{
		color: 'white'
	},
	logo:{
		width: 25,
		height: 20,
		resizeMode: 'contain'
	},
	container:{
		justifyContent: 'space-between',
		// marginLeft: 4,
		// marginRight: 4,
		margin : 5,
		marginTop: 10,
		alignItems: 'center',
		flexDirection: 'row'
	},
	postOwner:{
		flexDirection: 'row',
		alignItems : 'center'
	},
	story:{
		width: 30,
		height: 30,
		borderRadius: 50,
		marginLeft: 8,
		marginRight: 10,
		// marginTop: 5,
		marginBottom: 4
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