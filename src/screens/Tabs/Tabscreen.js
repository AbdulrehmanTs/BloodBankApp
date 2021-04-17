import React from 'react';
import { Container, Header, Tab, Tabs, Body, Right, Title } from 'native-base';
import Tab1 from './Tab1';
import Tab3 from './Tab3';


import Profile from '../Profile'

export default function Tabscreen() {

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
          <Profile />
        </Tab>
        <Tab heading="About">
          <Tab3 />
        </Tab>
      </Tabs>
    </Container>
  );
}
