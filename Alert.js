import React, { useState } from "react";
import { View, StyleSheet, Button, Alert } from "react-native"; 
import { createIconSetFromFontello } from "react-native-vector-icons";

import { checkbookingavailability } from "./Screens/HomeScreen";

const alerting = ()=>{
    console.log(checkbookingavailability())
    console.log(Promise.resolve(checkbookingavailability()))
    
  if (Promise.resolve(checkbookingavailability())==true) {
    (alert('The machine is currently booked, please choose an available one.'))
  } else {
    (alert('Please Proceed to Book'))
  }
}
export default alerting;