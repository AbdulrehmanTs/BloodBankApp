import React, {useState} from 'react';
import {Text} from 'react-native'
import { Container, Header, Tab, Tabs, Body, Right, Title} from 'native-base';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

import profile from '../profile'

export default function Tabscreen() {

  const [porfile, setProfile] = useState(true);
  profileChange = ()=>{
    setProfile(false)
  }
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
            <Tab2 />
          </Tab>
          <Tab heading="About">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
  );
}
