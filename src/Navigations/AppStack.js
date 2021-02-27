import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactDonor from '../screens/ContactDonor'
import Tabscreen from '../screens/Tabs/Tabscreen'
import About from '../screens/About'
import Profile from '../screens/profile'

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Tabscreen' headerMode='none'>
        <Stack.Screen name='Tabscreen' component={Tabscreen}/>
        <Stack.Screen name='ContactDonor' component={ContactDonor} />
        <Stack.Screen name='About' component={About}/>
        <Stack.Screen name='Profile' component={Profile}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
  }  

export default AppNavigation;