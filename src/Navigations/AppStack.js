import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ContactDonor from '../screens/ContactDonor'
import Tabscreen from '../screens/Tabs/Tabscreen'
import About from '../screens/About'
import Profile from '../screens/Profile'

const Stack = createStackNavigator();


function AppStack() {
  return (
        <Stack.Navigator initialRouteName='Tabscreen' headerMode='none'>
          <Stack.Screen name='Tabscreen' component={Tabscreen} />
          <Stack.Screen name='ContactDonor' component={ContactDonor} />
          <Stack.Screen name='About' component={About} />
          <Stack.Screen name='Profile' component={Profile} />
        </Stack.Navigator>
  )
}

export default AppStack;