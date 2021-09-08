import * as React from 'react';
import { Text, View } from 'react-native';
import Header from '../shared/Header';
import BookingsScreen from '../Screens(tab navigator)/BookingsScreen'
import { createStackNavigator } from '@react-navigation/stack';
/*
const screens = {
  BookingsScreen:{
    screen: BookingsScreen,
    navigationOption:{
      headerTitle: () => <Header/>
    },
  },
}
  const BookingsScreenStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
      headerTintColor:'#444',
      headerStyle:{ backgroundcolor: '#eee',
                      height: 60},
    }
  });



export default BookingsScreenStack;
*/
export default function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Homescreen</Text>
      </View>
  );
  }