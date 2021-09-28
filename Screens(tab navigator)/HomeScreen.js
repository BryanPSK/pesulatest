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
        <Button title = "readbooking" onPress={ Readbooking } />
        <Button title = "checktrue" onPress={ checktrue } />
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

//Check if machine is booked or not. then carry out action(in this case print statement)
function checktrue(){
  firebase.firestore()
  .collection('SaracaHall')
  .doc('Machine1')
  .collection('bookstatus')
  .doc('bookstatus')
  .get()
  .then( documentSnapshot =>{
    var isbooked=documentSnapshot.get('isbooked?')
    if (isbooked == true){
      //do something
    }
    if(isbooked == false){
      //do something
    }
  
  })
}

function Readbooking(){
  
  firebase.firestore()
  .collection('SaracaHall')
  .doc('Machine1')
  .collection('bookstatus')
  .doc('bookstatus')
  .get()
  .then( documentSnapshot =>{
    var isbooked=documentSnapshot.get('isbooked?')
    console.log(isbooked)
    return (isbooked)
  })
   
    ;
  }






