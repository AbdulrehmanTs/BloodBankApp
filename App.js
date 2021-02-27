/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import AppStack from './src/Navigations/AppStack'
import WelcomeScreen from './src/screens/Welcome'

const App = () => {
  const [welcomeScreen, setWelcomescreen] = useState(true);
  
  useEffect(()=>{
    setTimeout(()=>{
      setWelcomescreen(false)
    }, 1500);
  }, []);

  if (welcomeScreen){
    return(
      <WelcomeScreen/>
    )
  }


  return (
    <>
      <AppStack />
    </>
  );
};


export default App;
