import React from 'react';

import {
  StyleSheet,
  View, Text, Image, TouchableOpacity
} from 'react-native';

// import { navigationRef } from '../../appRootNav';
import * as RootNavigation from '../../appRootNav';
const header = () => {
		const accountName = 'tejasThakare21_theGod'
    return (
      <View style={styles.container}>
      	
      	<TouchableOpacity 
      			style={{flexDirection: 'row', justifyContent: 'center'}} 
      			onPress={() => {
              RootNavigation.navigate("App")
            }}
        >
      		<Image style={styles.logo} source = {require('../../assets/leftArrow.png')} />
      		<Text style={{color: "white",  fontSize: 17, fontWeight: "bold"}}>{accountName.length > 15 ? accountName.substring(0, 15)+"...": accountName}</Text>
      	</TouchableOpacity>

      	<View style={styles.iconContainer}>
      		<TouchableOpacity style={{...styles.icons, paddingRight: 10}} onPress={() => {
                          RootNavigation.navigate("NewPost")
                        }}>
	      		<Image style={styles.icon} source = {require('../../assets/call.png')} />
	      	</TouchableOpacity>
	      	<TouchableOpacity style={styles.icons} onPress={() => {
                          RootNavigation.navigate("Save")
                        }}>
	      		<Image style={styles.icon} source = {require('../../assets/edit.png')} />
	      	</TouchableOpacity>
      	</View>
      </View>
    );
}

const styles = StyleSheet.create({
	logo:{
		width: 23,
		height: 24,
		marginLeft: 2,
		marginRight: 10,
		// resizeMode: 'contain'
	},
	container:{
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		paddingLeft : 10,
		paddingRight : 11,
		paddingTop : 5,
		paddingBottom : 5
	},
	iconContainer: {
		color: 'white',
		flexDirection: 'row'
	},
	icons:{
		paddingLeft: 6
	},
	icon:{
		width: 25,
		height: 28,
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