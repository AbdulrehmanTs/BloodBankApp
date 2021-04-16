import React, { useEffect, useContext, useState } from 'react';
import auth from '@react-native-firebase/auth'
import { Container, Header, Tab, Tabs, Body, Right, Title } from 'native-base';
import AuthStack from '../../Navigations/AuthStack.js'
import { AuthContext } from '../../Navigations/AuthProvider'
import Tab1 from './Tab1';
import Tab3 from './Tab3';


import Profile from '../Profile'

export default function Tabscreen() {

  const [initializing, setInitializing] = useState(true);
  const { user, setUser } = useContext(AuthContext);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [])

  if (initializing) return null;

  return (
    <Container>
      <Header hasTabs >
        <Right>
          <Body>
            <Title>Mobile Blood Bank Application</Title>
          </Body>
        </Right>
      </Header>
      <Tabs>
        <Tab heading="Home">
          <Tab1 />
        </Tab>
        <Tab heading="Donate">
          {user ? <Profile /> : <AuthStack />}
        </Tab>
        <Tab heading="About">
          <Tab3 />
        </Tab>
      </Tabs>
    </Container>
  );
}
