import * as React from 'react';
import { Text, View , StyleSheet, TouchableOpacity, TextInputComponent} from 'react-native';
import { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {CreditsScreen, increment  } from './CreditsScreen';
import { Component } from 'react';

import { TextInput } from 'react-native-gesture-handler';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

/* const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MyComponent = () => (
  <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

export default MyComponent; */



function BookingsScreen({ navigation }) {
  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
  
    return (
      <View /* style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} */>
      <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://www.bestslogans.com/img/pics/201711_1113_fdehf.jpg' }} />
    <Card.Actions>
    <Button mode="outlined" onPress={() => navigation.navigate('SaracaHall')}>
    SaracaHall
  </Button>
  <Button mode="outlined" onPress={() => navigation.navigate('TamarindHall')}>
    TamarindHall
  </Button>
      
    </Card.Actions>
  </Card>
        
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
        
        <Stack.Screen name ='Bookings' component ={BookingsScreen} 
        options={{headerRight:() => <View><TextInput placeholder ='Credit Value'
        onChangeText={(count) => setCount(count)}
        /></View>
          
        }} />
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
