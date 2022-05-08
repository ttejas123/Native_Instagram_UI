import React from 'react';

import {
  StyleSheet,
  View, Text, Image, TouchableOpacity
} from 'react-native';

const header = () => {
    return (
      <View style={styles.container}>
      	<View style={styles.iconContainer}>
      		<TouchableOpacity>
	      		<Image style={{
		width: 29,
		height: 28,
		margin: 2,
		resizeMode: 'contain'
	}} source = {require('../../assets/like1.png')} />
	      	</TouchableOpacity>
	      	
	      	<TouchableOpacity>
	      		<Image style={{
		width: 30,
		height: 28,
		margin: 2,
		resizeMode: 'contain'
	}} source = {require('../../assets/comment.png')} />
	      	</TouchableOpacity>
	      	<TouchableOpacity>
	      		<Image style={styles.icon} source = {require('../../assets/share.png')} />
	      	</TouchableOpacity>
      	</View>
      	<TouchableOpacity>
	      		<Image style={styles.icon} source = {require('../../assets/save.png')} />
	      </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
	logo:{
		width: 120,
		height: 50,
		resizeMode: 'contain'
	},
	container:{
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		marginLeft: 3,
		marginRight: 3
	},
	iconContainer: {
		color: 'white',
		flexDirection: 'row'
	},
	icon:{
		width: 27,
		height: 28,
		margin: 2,
		resizeMode: 'contain'
	},
	unreadBadge:{
		backgroundColor: 'red',
		position: 'absolute',
		left: 18,
		// bottom: 18,
		width: 20,
		height : 17,
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 100,
		borderRadius: 25
	},
	unreadBadgeTxt: {
		color: 'white',
		justifyContent: 'center',
		alignItems : 'center'
	}
});


export default header;