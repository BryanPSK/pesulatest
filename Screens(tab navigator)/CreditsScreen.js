import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Button} from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import App from '../App';
import BookingsStack from './BookingsScreen';
import SettingsScreen from './SettingsScreen';

/*export default function CreditsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Credits</Text>
    </View>
  );
}*/
//purchase credits for bookings washing machine

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};





export default function CreditsScreen (){
  const[count,setCount]=useState(0)
  function increment(props){
   setCount(count+10)
  }
  
  //navigation.navigate('BookingsStack',{
   //data: 'hi'//useEffect(()=>{{count}}),
 //})

  return (
      <View style={styles.container}>
      <Text style={{fontSize:60}}> {count} </Text>
      <Button title="10 Credits" onPress={increment}></Button>


    </View>
  );
  }

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});