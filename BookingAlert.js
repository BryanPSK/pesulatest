import React, { useState } from "react";
import { View, StyleSheet, Button, Alert } from "react-native"; 
import 'firebase/firestore';
import { checkbookingavailability } from "./Screens/HomeScreen";
function BookingAlert() {
   console.log(checkbookingavailability())
  /* if({checkbookingavailabilty}==true){
    return  (alert('The machine is currently booked, please choose an available one.'))
    
  }
  else{
    return(alert('Please Proceed to Book'))
  } */
/*   function checkbookingavailability(){
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
     
      ; */
    }
   /*  if(us){
        return  (alert('The machine is currently booked, please choose an available one.'))
    
      }
    else{
        return(alert('Please Proceed to Book'))
    } */
    

  /* const createTwoButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Confirm", onPress: () => console.log("Confirm Pressed") }
      ]
    );

  const createThreeButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

  return (
    <View style={styles.container}>
      <Button title={"2-Button Alert"} onPress={createTwoButtonAlert} />
      <Button title={"3-Button Alert"} onPress={createThreeButtonAlert} />
    </View>
  ); */


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  }
});

export default BookingAlert;