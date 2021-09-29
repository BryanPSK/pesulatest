import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Button} from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { onChange } from 'react-native-reanimated';
import MainStack from '../App';
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

/* const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
}; */

/* const value = (props) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text>Hello {props.number}!</Text>
    </View>
  );
} */

export default function CreditsScreen(){
  return(
    Main()
  )
}

 function Main(){
  const[count,setCount]=useState(0)
  function increment(){

    setCount(count+10)
  }
 
  
  return (
      <View style={styles.container}>
     
      <Text style={{fontSize:60}}> {count} </Text>
      <Button title="10 Credits" onPress={increment}></Button>
    

    </View>
  );
  }

 const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  
});