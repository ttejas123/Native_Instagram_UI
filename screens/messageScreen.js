import React from 'react'
import { View, Text, Safe, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import Harder from '../components/msg/header.js'
import Body from '../components/msg/body.js'
import Middal from '../components/msg/middal.js'

import {Chat, msgNav} from '../components/home/data.js'
const Message = ({ navigation }) => {
	return(
		<SafeAreaView style={styles.container}>	
			<Harder />
			<Middal BootomData={msgNav}/>
			<ScrollView>
				{Chat.map((val, index) => {
					return(
						<TouchableOpacity key = {index}>
							<Body {...val} />
						</TouchableOpacity>
					);
				})}
			</ScrollView>
			
		</SafeAreaView>
		);
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'black'
  },
  text: {
  	color: 'white'
  }
});

export default Message;