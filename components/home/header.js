import React from 'react';

import {
  StyleSheet,
  View, Text, Image, TouchableOpacity
} from 'react-native';

// import { navigationRef } from '../../appRootNav';
import * as RootNavigation from '../../appRootNav';
const header = () => {
    return (
      <View style={styles.container}>
      	<TouchableOpacity>
      		<Image style={styles.logo} source = {require('../../assets/insta.png')} />
      	</TouchableOpacity>
      	<View style={styles.iconContainer}>
      		<TouchableOpacity onPress={() => {
                          RootNavigation.navigate("NewPost")
                        }}>
	      		<Image style={styles.icon} source = {require('../../assets/PostAdd.png')} />
	      	</TouchableOpacity>
	    
	      	<TouchableOpacity onPress={() => {
                          RootNavigation.navigate("Message")
                        }}>
	      		<View style={styles.unreadBadge}>
	      			<Text style={styles.unreadBadgeTxt}>11</Text>
	      		</View>
	      		<Image style={styles.icon} source = {require('../../assets/message.png')} />
	      	</TouchableOpacity>
      	</View>
      </View>
    );
}

const styles = StyleSheet.create({
	logo:{
		width: 100,
		height: 50,
		marginLeft: 10,
		// resizeMode: 'contain'
	},
	container:{
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		paddingLeft : 0,
		paddingRight : 9,
		paddingTop : 0,
		paddingBottom : 5
	},
	iconContainer: {
		color: 'white',
		// paddingLeft : 5,
		// paddingRight: ,
		justifyContent: 'space-between',
		flexDirection: 'row'
	},
	icon:{
		width: 30,
		height: 29,
		margin: 4,
		resizeMode: 'contain'
	},
	unreadBadge:{
		backgroundColor: 'red',
		position: 'absolute',
		left: 18,
		bottom: 18,
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