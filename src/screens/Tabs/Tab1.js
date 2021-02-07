import React from 'react';
import {StyleSheet} from 'react-native'
import { Container, Header, Content, List, ListItem, Thumbnail, Title, Text, Left, Body, Right, Button } from 'native-base';


function Tab1(props) {
  console.log(props)
    return (
      <>
      <Container>
        <Header>
            <Right>
                <Body>
                    <Title>Donors (worldwide)</Title>
                </Body>
            </Right>
        </Header>

        <Content>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail circle source={{ uri: 'https://companynewheroes.com/files/2019/09/Lucas-De-Man-Fotograaf-Anne-Harbers-2-1024x683-960x514.jpg' }} uri={"https://companynewheroes.com/files/2019/09/Lucas-De-Man-Fotograaf-Anne-Harbers-2-1024x683-960x514.jpg"} />
              </Left>
              <Body>
                <Text name="Smith Dav">Smith Dav <Text note >Online</Text></Text>
                
                <Text note numberOfLines={1} style={styles.bldGroup} >A+
                  <Text note style={styles.age} >Age 21</Text>
                </Text>
                  
                
              </Body>
              <Right>
                <Button transparent onPress={(props)=> props.navigation.navigate('ContactDonor')}>
                  <Text>Contact1</Text>
                </Button>
              </Right>
            </ListItem>
            
            <ListItem thumbnail>
              <Left>
                <Thumbnail circle source={{ uri: 'https://www.thetelegraphandargus.co.uk/resources/images/11574659?type=responsive-gallery-fullscreen' }} />
              </Left>
              <Body>
                <Text>James Reo <Text note > Online</Text></Text>
                <Text note numberOfLines={1} style={styles.bldGroup} >AB+
                  <Text note style={styles.age} >Age 28</Text>
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Contact2</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail circle source={{ uri: 'https://cdn2.stylecraze.com/wp-content/uploads/2013/06/311-Top-25-Most-Beautiful-Pakistani-Women-In-The-World.jpg' }} />
              </Left>
              <Body>
                <Text>Maria Md. <Text note > Online</Text></Text>
                <Text note numberOfLines={1} style={styles.bldGroup} >A+
                  <Text note style={styles.age} >Age 21</Text>
                </Text>
              </Body>
              <Right>
                <Button transparent >
                  <Text>Contact</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail circle source={{ uri: 'https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2017/11/17/639329-indian-men.jpg' }} />
              </Left>
              <Body>
                <Text>Kumar Rao <Text note > Online</Text></Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text><Text note numberOfLines={1} style={styles.bldGroup} >A+
                  <Text note style={styles.age} >Age 21</Text>
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Contact</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail circle source={{ uri: 'https://www.thestatesman.com/wp-content/uploads/2018/07/Palwinder-Singh.jpg' }} />
              </Left>
              <Body>
                <Text>Mahim Yado <Text note > Online</Text></Text>
                <Text note numberOfLines={1} style={styles.bldGroup} >A+
                  <Text note style={styles.age} >Age 21</Text>
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Contact</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail circle source={{ uri: 'https://www.ramanmedianetwork.com/wp-content/uploads/2017/09/lichen.jpg'}} />
              </Left>
              <Body>
                <Text>Akram Siddiqui <Text note > Online</Text></Text>
                <Text note numberOfLines={1} style={styles.bldGroup} >A+
                  <Text note style={styles.age} >Age 21</Text>
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>Contact</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail circle source={{ uri: 'https://thumbs.dreamstime.com/t/young-man-exercise-clothing-park-beijing-china-33369498.jpg' }} />
              </Left>
              <Body>
                <Text>Shoaib Khan <Text note > Online</Text></Text>
                <Text note numberOfLines={1} style={styles.bldGroup} >A+
                  <Text note style={styles.age} >Age 21</Text>
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text >Contact</Text>
                </Button>
              </Right>
            </ListItem>

          </List>
        </Content>
      </Container>
    </>
    );
  }


  const styles = StyleSheet.create({
    bldGroup: {
      color: 'red',
      marginLeft: 10,
    },
    age:{
      color: 'green',
      paddingLeft: 10
    }
  })

  

export default Tab1;


    