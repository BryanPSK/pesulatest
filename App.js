import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';  
import 'react-native-gesture-handler';
import HomeScreen from './Screens(tab navigator)/HomeScreen';    //import from screens folder
import BookingsScreen from './Screens(tab navigator)/BookingsScreen'; //import from screens folder
import SettingsScreen from './Screens(tab navigator)/SettingsScreen'; //import from screens folder
import CreditsScreen from './Screens(tab navigator)/CreditsScreen'; //import from screens folder
import FontAwesome from "react-native-vector-icons/FontAwesome"; //for navigation bar icons
import BookingsStack from './Screens(tab navigator)/BookingsScreen';


//for beautifying stuff, might look at react native paper


const Tab = createBottomTabNavigator();   //bottom navigation bar




export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            
            //Set the icon based on which route it is (name of the tab). All icons used are FontAwesome
            if (route.name === 'Home') {
              iconName = 'home';
            } 
            else if (route.name === 'Bookings') {
              iconName = 'th-list';
            }
            else if (route.name === 'Settings') {
              iconName = 'cog';
            }
            else if (route.name === 'Credits') {
              iconName = 'credit-card';                                  //iconName = focused? 'credit-card':'credit-card-alt'; // '1':'2' icon change from 1 to 2 on click.
            }

            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >


        {/* there needs to be a constant header regardless of tabs. Yet to figure out */}
        <Tab.Screen name="Home" component={HomeScreen} options = {{headerShown : false}} />
        <Tab.Screen name="Bookings" component={BookingsStack} options = {{headerShown : false}}/>
        <Tab.Screen name="Credits" component={CreditsScreen} options = {{headerShown : false}}/>
        <Tab.Screen name="Settings" component={SettingsScreen} options = {{headerShown : false}}/>
      </Tab.Navigator>
    </NavigationContainer>

  );
}