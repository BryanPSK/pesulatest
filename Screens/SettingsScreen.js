import * as React from 'react';
import { Settings, StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo-constants';
import CreditsScreen from './CreditsScreen';


//possible user profile settings such as display name etc? or set favourite hall?
export default function SettingsScreen(){
 
    return(
      <View style={styles.container}>
        
        <Text>Settings</Text>
      </View>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});


  