import * as React from 'react';
import { Text, View , Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Header from '../Shared/Header';





function BookingsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* text here can be beautified */}
        <Text>Which hall?</Text>    
        {/* shows user the available halls and navigates them to the page for availability. Can beautify this as well  */}
        <Button title='SaracaHall' onPress={() => navigation.navigate('SaracaHall')}/>
        <Button title='TamarindHall' onPress={() => navigation.navigate('TamarindHall')}/>
        <Button title='Credits' onPress={() => navigation.navigate('Credits')}/>
      
      </View>
    );
  }

function SaracaHallScreen (){
  return(
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  <Text> Test </Text>
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
function CreditsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Top up credits</Text>
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


const Stack = createStackNavigator(/*screens, {
  defaultNavigationOptions:{
    headerTintColor: '#444',
  headerstyle: {backgroundcolor: 'eee', height: 60}  }
}*/)

  //stack shows hall --> washing machines available
  export default function BookingsStack(){
    return(
      <Stack.Navigator>
        <Stack.Screen name ='Bookings' component ={BookingsScreen}
        options = {{
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('Credits')}
              title="Credits"
              color="#00cc00"
            />
          ),
        }}
        />
        <Stack.Screen name ='SaracaHall' component ={SaracaHallScreen} />
        <Stack.Screen
        name ='TamarindHall'
        component ={TamarindHallScreen} />
        <Stack.Screen name ='Credits' component ={CreditsScreen}/>
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
  }}*/