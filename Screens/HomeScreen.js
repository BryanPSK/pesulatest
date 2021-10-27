import * as React from 'react';
import { Text, View, Button, Alert,} from 'react-native';
import 'firebase/firestore';
import firebase from '../firebase/firebaseDB';
import CreditsScreen from './CreditsScreen';




export default function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Homescreen</Text>
        <Button title = "firestore" onPress={ UpdateFirestore } />
        <Button title = "checkbookingavailability" onPress={ checkbookingavailability } />
        <Button title = "bookmachine1" onPress={ bookmachine1 } />
        <Button title = "forcebookmachine1" onPress={ forcebookmachine1 } />
        <Button title = "forceunbookmachine1" onPress={ forceunbookmachine1 } />
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
function forcebookmachine1(){
firebase.firestore()
  .collection('SaracaHall')
  .doc('Machine1')
  .collection('bookstatus')
  .doc('bookstatus')
  .set({
    isbooked: true,
  })
  console.log('machine1 forcebooked')
}
//function to unbook machine 1. updates the 'isbooked' boolean field in firestore.
function forceunbookmachine1(){
  firebase.firestore()
    .collection('SaracaHall')
    .doc('Machine1')
    .collection('bookstatus')
    .doc('bookstatus')
    .set({
      isbooked: false,
    })
    console.log('machine1 force unbooked')
  }

//Check if machine is booked or not. then carry out action(in this case print statement)
// function bookmachine1(){
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
export function checkbookingavailability(){
  return(
  firebase.firestore()
  .collection('SaracaHall')
  .doc('Machine1')
  .collection('bookstatus')
  .doc('bookstatus')
  .get()
  .then( documentSnapshot =>{
    var isbooked=documentSnapshot.get('isbooked')
    console.log(isbooked)
  return(isbooked)})
  )
  }





//Check if machine1 is avail. if available, book it.
  function bookmachine1(){
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
        
        //check if got money first (shihui) then minus $1
        forcebookmachine1()
        //add time stamp. if timeout, add refund $1
        //push user creds into firebase
        console.log('machine1 booked successfully')
        //do something
      }
    
    })
  }
  
