import * as React from 'react';
import { Text, View, Button, Alert,} from 'react-native';
import 'firebase/firestore';
import firebase from '../firebase/firebaseDB';
import { cos } from 'react-native-reanimated';


export default function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Homescreen</Text>
        <Button title = "firestore" onPress={ UpdateFirestore } />
        <Button title = "checkbookingavailability" onPress={ Readbooking } />
        <Button title = "bookmachine1" onPress={ checktrue } />
        <Button title = "forcebookmachine1" onPress={ bookmachine1 } />
        <Button title = "forceunbookmachine1" onPress={ unbookmachine1 } />
        {/* <Button title = "consolelog" onPress={ ()=>  } /> */}
      </View>
  );
  }

   //this function writes data to firestore 
  function UpdateFirestore(){
    firebase.firestore()
      .collection('SaracaHall')
      .add({
        title:"Test1",
        potate : true,
      })
    }
    

//hardcoded function to book machine 1.updates the 'isbooked' boolean field in firestore
function bookmachine1(){
firebase.firestore()
  .collection('SaracaHall')
  .doc('Machine1')
  .collection('bookstatus')
  .doc('bookstatus')
  .set({
    isbooked: true,
  })
}
//function to unbook machine 1. updates the 'isbooked' boolean field in firestore.
function unbookmachine1(){
  firebase.firestore()
    .collection('SaracaHall')
    .doc('Machine1')
    .collection('bookstatus')
    .doc('bookstatus')
    .set({
      isbooked: false,
    })
  }

//Check if machine is booked or not. then carry out action(in this case print statement)
// function checktrue(){
//   firebase.firestore()
//   .collection('SaracaHall')
//   .doc('Machine1')
//   .collection('bookstatus')
//   .doc('bookstatus')
//   .get()
//   .then( documentSnapshot =>{
//     var isbooked=documentSnapshot.get('isbooked')
//     if (isbooked == true){
//       console.log('machine is currently booked')
//       //do something
//     }
//     if(isbooked == false){
//       console.log('machine is available for booking')
//       //do something
//     }
  
//   })
// }

//this function checks the current booking status
function Readbooking(){
  firebase.firestore()
  .collection('SaracaHall')
  .doc('Machine1')
  .collection('bookstatus')
  .doc('bookstatus')
  .get()
  .then( documentSnapshot =>{
    var isbooked=documentSnapshot.get('isbooked')
    console.log(isbooked)
    return (isbooked)
  })
   
    ;
  }





//Check if machine is avail. if available, book it.
  function checktrue(){
    firebase.firestore()
    .collection('SaracaHall')
    .doc('Machine1')
    .collection('bookstatus')
    .doc('bookstatus')
    .get()
    .then( documentSnapshot =>{
      var isbooked=documentSnapshot.get('isbooked')
      if (isbooked == true){
        console.log('machine is currently booked')
        //do something
      }
      if(isbooked == false){
        bookmachine1()
        console.log('machine1 booked successfully')
        //do something
      }
    
    })
  }
  