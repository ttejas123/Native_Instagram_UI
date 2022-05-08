import React from 'react'
import { View, Text, Safe, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
// import Harder from '../components/home/header.js'
import Stories from '../components/home/stories.js'
import Post from '../components/home/post.js'
// import Bottom from '../components/home/BottomTabs.js'
const HomeScreen = (props) => {
	return(
		<SafeAreaView style={styles.container}>	
			<ScrollView>
				<Stories />
				<Post />
			</ScrollView>
		</SafeAreaView>
		);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
});

export default HomeScreen;