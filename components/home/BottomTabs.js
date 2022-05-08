import React, {useState, useEffect} from 'react';
import {BootomData} from './data';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as RootNavigation from '../../appRootNav';
import {
  StyleSheet,
  View, Text, Image, TouchableOpacity
} from 'react-native';


const Bottom = (props) => {
    const [tab, settab] = useState('Home');
    return (
      <View style={styles.container}>
        {BootomData.map((icons, index) => {
          
          return(
              <View key={index}>
                {icons.set == tab ? (
                        <TouchableOpacity onPress={() => {
                          settab(icons.set)
                          RootNavigation.navigate(`${icons.set}`)
                        }}>
                            <Image style={styles.icon}  source = {icons.active} />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity key={index} onPress={() => {
                            settab(icons.set)
                            RootNavigation.navigate(`${icons.set}`)
                        }}>
                            <Image style={styles.icon} source = {icons.Inactive} />
                        </TouchableOpacity>
                    )}
              </View>
            );
        })}  
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
    paddingLeft : 10,
    paddingRight : 11,
    paddingTop : 5,
    paddingBottom : 5
  },
  iconContainer: {
    justifyContent: 'space-between',
     alignItems: 'center',
    color: 'white',
    flexDirection: 'row'
  },
  icon:{
    width: 28,
    height: 28,
    margin: 3,
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


export default Bottom;