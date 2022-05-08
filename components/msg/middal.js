import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as RootNavigation from '../../appRootNav';
import {
  StyleSheet,
  View, Text, Image, TouchableOpacity
} from 'react-native';


const Bottom = ({BootomData}) => {
    const [tab, settab] = useState('Home');
    return (
      <View style={styles.container}>
        {BootomData.map((icons, index) => {
          
          return(
              
                icons.set == tab ? (
                        <TouchableOpacity key={index} style={{textAlign: 'center', width:100, borderBottomWidth: 1, borderBottomColor: 'white'}} onPress={() => {
                          settab(icons.set)
                        }}>
                            <Text style={{...styles.text, fontWeight: 'bold', textAlign: 'center'}}>{icons.name}</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity key={index} style={{textAlign: 'center', width:100}} key={index} onPress={() => {
                            settab(icons.set)
                        }}>
                            <Text style={{...styles.text, textAlign: 'center'}}>{icons.name}</Text>
                        </TouchableOpacity>
                    )
              
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
  text:{
    color: 'white',
    fontSize: 18,
    // textAlign: 'center'
  },
  container:{
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    // paddingLeft : 1,
    // paddingRight : 1,
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
    // width: 28,
    // height: 28,
    // margin: 3,
    // resizeMode: 'contain'
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