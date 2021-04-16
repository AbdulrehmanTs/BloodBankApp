/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import WelcomeScreen from './src/screens/Welcome';
import Providers from './src/Navigations/index'

const App = () => {
  const [welcomeScreen, setWelcomescreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setWelcomescreen(false)
    }, 1500);
  }, []);

  if (welcomeScreen) {
    return (
      <WelcomeScreen />
    )
  }


  return (
    <>
      <Providers/>
    </>
  );
};


export default App;
