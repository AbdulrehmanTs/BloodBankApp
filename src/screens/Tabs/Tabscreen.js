import React from 'react';
import { Container, Header, Tab, Tabs, Body, Right, Title } from 'native-base';
import HomeTab from './HomeTab';
import Tab3 from './Tab3';
import Profile from '../Profile'
import BecomeDonor from '../BecomeDonor'


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
          <HomeTab />
        </Tab>
        <Tab heading="Donate">
          {/* <Profile /> */}
          <BecomeDonor />
        </Tab>
        <Tab heading="About">
          <Tab3 />
        </Tab>
      </Tabs>
    </Container>

  );
}
