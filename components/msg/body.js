import React from 'react'

import {
  StyleSheet,
  View, Text, Image, TouchableOpacity, ScrollView
} from 'react-native';
// import { USER } from './data.js'
const stories = (props) => {
    return (
      <View style={styles.container}>
      	<View style={styles.postOwner}>
      		<Image source={{uri: props.profile}} style={styles.story} />  					
			    <View>
			    	<Text style={styles.text}>{props.user}</Text>
      			<Text style={{color: 'gray'}}>Active 1 min ago</Text>
      		</View>
      	</View>
      	<TouchableOpacity style={{alignItems : 'center'}}>
      		<Image style={styles.logo} source = {require('../../assets/camera.png')} />				
      	</TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
	text:{
		color: 'white',
		fontSize : 15,
		marginTop: 10
	},
	logo:{
		width: 25,
		height: 25,
		marginRight: 10,
		resizeMode: 'contain'
	},
	container:{
		justifyContent: 'space-between',

		margin : 5,
		marginTop: 10,
		alignItems: 'center',
		flexDirection: 'row'
	},
	postOwner:{
		flexDirection: 'row',
		// margin = 'inherit'
		// alignItems : 'center'
	},
	story:{
		width: 55,
		height: 55,
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