import React, { useContext, useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import { AuthContext } from './AuthProvider'
import AuthStack from './AuthProvider'
import AppStack from './AppStack'

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack />
        </NavigationContainer>
    );
};

export default Routes;