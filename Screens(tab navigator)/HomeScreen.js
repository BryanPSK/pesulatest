import * as React from 'react';
import { Text, View } from 'react-native';
import BookingsScreen from '../Screens(tab navigator)/BookingsScreen'
import { createStackNavigator } from '@react-navigation/stack';
import { onChange } from 'react-native-reanimated';

export default function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Homescreen</Text>
      </View>
  );
  }
 