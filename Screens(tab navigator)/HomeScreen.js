import * as React from 'react';
import { Text, View, Button} from 'react-native';
// import { firebase } from "@firebase/app";
// import "firebase/firestore";
// import firebase from 'firebase/app';
import 'firebase/firestore';
import firebase from '../firebase/firebaseDB';


export default function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Homescreen</Text>
        <Button title = "firestore" onPress={()=> testwrite } />
      </View>
  );
  }

//   function testwrite(){

  
//   firebase.firestore()
//   .collection('SaracaHall')
//   .add({
//     title:"Test",
//     potate : true,
//   })
  
// };


  firebase
  .firestore()
  .collection("Users3")
  .doc("mydoc")
  .collection("Activities")
  .doc("Database")
  .set({
    key: "1",
    value: "",
  })
  .then((ref) => { console.log(ref) });

