import React, { createContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactDonor from '../screens/ContactDonor'
import Tabscreen from '../screens/Tabs/Tabscreen'
import About from '../screens/About'
import Profile from '../screens/Profile'
import Register from '../screens/RegisterScreen'
import LoginScreen from '../screens/LoginScreen'

const Stack = createStackNavigator();
const context = createContext()

function AppNavigation() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Tabscreen' headerMode='none'>
          <Stack.Screen name='Tabscreen' component={Tabscreen} />
          <Stack.Screen name='ContactDonor' component={ContactDonor} />
          <Stack.Screen name='About' component={About} />
          <Stack.Screen name='Profile' component={Profile} />
          <Stack.Screen name='register' component={Register} />
          <Stack.Screen name='loginScreen' component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>

  )
}

export default AppNavigation;