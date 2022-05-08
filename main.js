import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
// import App from './App.js'
import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './appRootNav';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as NavigationBar from 'expo-navigation-bar';
import { StatusBar } from 'expo-status-bar';
import Message from './screens/messageScreen'

import HomeScreen from './screens/homeScreen.js'
import Harder from './components/home/header.js'
import Bottom from './components/home/BottomTabs.js'
// import * as React from 'react';
// import { navigationRef } from './RootNavigation';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// function Message({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <TouchableOpacity onPress={() => {
                          
//                           navigation.navigate('App')
//                         }}>
//           <Text>Message Screen</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }









function Home(props) {
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <StatusBar style="auto" />
      <HomeScreen {...props} />
    </View>
  );
}

function Search({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => {
                          
                          navigation.navigate('Home')
                        }}>
          <Text>Search Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

function Reels({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => {
                          
                          navigation.navigate('Home')
                        }}>
          <Text>Reels Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

function Love({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => {
                          
                          navigation.navigate('Home')
                        }}>
          <Text>Love Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

function Profile({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => {
                          
                          navigation.navigate('Home')
                        }}>
          <Text>Profile Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

const AppRoute = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaView style={{backgroundColor: "black", flex:1}}>
      <Harder />
      
        <AppRoute.Navigator screenOptions={{
          headerShown: false
        }}>
            <AppRoute.Screen name="Home" component={Home} /> 
            <AppRoute.Screen name="Search" component={Search} /> 
            <AppRoute.Screen name="Reels" component={Reels} /> 
            <AppRoute.Screen name="Love" component={Love} /> 
            <AppRoute.Screen name="Profile" component={Profile} /> 
        </AppRoute.Navigator>
      
      <Bottom />
    </SafeAreaView>
  );
}














function Save({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => {
                          
                          navigation.navigate('App')
                        }}>
          <Text>Save Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

function NewPost({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => {
                          
                          navigation.navigate('App')
                        }}>
          <Text>New Post Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function Main() {
  
   useEffect(()=>{
    NavigationBar.setBackgroundColorAsync("#000");

  });
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer ref={navigationRef} >
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
            <Stack.Screen name="App" component={App} />
            <Stack.Screen name="Message" component={Message} /> 
            <Stack.Screen name="Save" component={Save} /> 
            <Stack.Screen name="NewPost" component={NewPost} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 0,
    backgroundColor: 'black'
  },
});
export default Main;
























// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black'
//   },
// });
// export default App;