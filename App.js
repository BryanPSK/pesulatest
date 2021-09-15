import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';  
import 'react-native-gesture-handler';
import HomeScreen from './Screens/HomeScreen';    //import from screens folder
import BookingsScreen from './Screens/BookingsScreen'; //import from screens folder
import SettingsScreen from './Screens/SettingsScreen'; //import from screens folder
import CreditsScreen from './Screens/CreditsScreen'; //import from screens folder
import FontAwesome from "react-native-vector-icons/FontAwesome"; //for navigation bar icons

const Tab = createBottomTabNavigator();   //bottom navigation bar

export default function Login({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN </Text> 
        <Button title='LOGIN' onPress={() => navigation.navigate('AfterLogin')} />

      </TouchableOpacity>
    </View>

  ); 
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});



function AfterLogin() {

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
              iconName = 'credit-card';  
            }                                //iconName = focused? 'credit-card':'credit-card-alt'; // '1':'2' icon change from 1 to 2 on click.
            
            else if (route.name === 'Login') {
                iconName = 'credit-card'; 
            
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
        <Tab.Screen name="Bookings" component={BookingsScreen} options = {{headerShown : false}}/>
        <Tab.Screen name="Credits" component={CreditsScreen} options = {{headerShown : false}}/>
        <Tab.Screen name="Settings" component={SettingsScreen} options = {{headerShown : false}}/>
        <Tab.Screen name="Login" component={LoginPage} options = {{headerShown : false}}/>

      </Tab.Navigator>
    </NavigationContainer>

  );
}

function LoginStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name ='Login' component ={Login} options = {{headerShown : false}}/>
      <Stack.Screen name ='AfterLogin' component ={AfterLogin} />
    </Stack.Navigator>
  );
}
