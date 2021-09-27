import * as React from 'react';
import { Text, View , Button, StyleSheet, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {CreditsScreen, increment  } from './CreditsScreen';
import { Component } from 'react';
import { useEffect, useLayoutEffect } from 'react/cjs/react.development';









function BookingsScreen({ navigation }) {

  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
        {/* text here can be beautified */}
        <Text>Which hall?</Text>    
        {/* shows user the available halls and navigates them to the page for availability. Can beautify this as well  */}
        <Button title='SaracaHall' onPress={() => navigation.navigate('SaracaHall')}/>
        <Button title='TamarindHall' onPress={() => navigation.navigate('TamarindHall')}/>
        
        
      
      </View>
    );
  
  }

 

function SaracaHallScreen (){
  
  return(
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Text> Test</Text>
  </View>
  );
}
function TamarindHallScreen (){
  return(
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Text> Test </Text>
  </View>
  );
}




/*const screens = {
  SaracaHallScreen:{
    screen: SaracaHallScreen,
    navigationOption:{
      headerTitle: () => <Header/>
    }
  },
    TamarindHallScreen:{
      screen: TamarindHallScreen,
      navigationOption:{
        headerTitle: () => <Header/>
    }
  },
}*/


const Stack = createStackNavigator()

  //stack shows hall --> washing machines available
  export default function BookingsStack() {

//var counter = props.route.params.data;

    return(
      
      <Stack.Navigator>
        
        <Stack.Screen name ='Bookings' component ={BookingsScreen} options={{headerRight:() => <Text></Text>}} />
        <Stack.Screen name ='SaracaHall' component ={SaracaHallScreen} />
        <Stack.Screen
        name ='TamarindHall'
        component ={TamarindHallScreen} />
        
      </Stack.Navigator>
    
    );
    
    }


 /* options = {{
    headerRight: () => (
      <Button
        onPress={() => alert('This is a button!')}
        title="Credits"
        color="#00cc00"
      />
    ),
  }}
  
  options={{headerRight:()=> (<Text>{DataTransfer}</Text>)}}
  */