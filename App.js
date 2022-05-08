import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import HomeScreen from './screens/homeScreen.js'
import Harder from './components/home/header.js'
import Bottom from './components/home/BottomTabs.js'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './RootNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Home(props) {
  return (
    <View style={styles.container}>
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

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Harder />
      <NavigationContainer ref={navigationRef} independent={true}>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}>
            <Stack.Screen name="Home" component={Home} /> 
            <Stack.Screen name="Search" component={Search} /> 
            <Stack.Screen name="Reels" component={Reels} /> 
            <Stack.Screen name="Love" component={Love} /> 
            <Stack.Screen name="Profile" component={Profile} /> 
        </Stack.Navigator>
      </NavigationContainer>
      <Bottom />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
});
export default App;