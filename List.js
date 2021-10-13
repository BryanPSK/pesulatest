import 'firebase/firestore';
import * as React from 'react';
import { View, Text } from 'react-native';
import { List } from 'react-native-paper';
import BookingAlert from './BookingAlert';
import { checkbookingavailability } from './Screens/HomeScreen';
import 'firebase/firestore';

const MyComponent = () => (
  <List.AccordionGroup>
    <List.Accordion title="Saraca Hall" id="1">
        <List.AccordionGroup>
        <List.Accordion title="Level 6" id="2">
        <List.Item title="Sophie" onPress={BookingAlert}/>
        <List.Item title="Bobby" onPress={() => alert('Clicked on Bobby!')}/>
        </List.Accordion>
    </List.AccordionGroup>
    <List.AccordionGroup>
        <List.Accordion title="Level 9" id="3">
        <List.Item title="Zoey" onPress={() => alert('Clicked on Zoey!')}/>
        <List.Item title="Charlie" onPress={() => alert('Clicked on Charlie!')}/>
        </List.Accordion>
    </List.AccordionGroup>
    </List.Accordion>
    <List.Accordion title="Tamarind Hall" id="4">
    <List.Item title="Zoey" onPress={() => alert('Clicked on Zoey!')}/>
        <List.Item title="Charlie" onPress={() => alert('Clicked on Charlie!')}/>
    </List.Accordion>
  
  </List.AccordionGroup>
);

export default MyComponent;