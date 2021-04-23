import React, {useEffect} from 'react';
import { StyleSheet } from 'react-native'
import { Container, Header, Content, List, Title, Body, Right } from 'native-base';
import User from "../../components/User"

const image1 = 'https://companynewheroes.com/files/2019/09/Lucas-De-Man-Fotograaf-Anne-Harbers-2-1024x683-960x514.jpg'
const image2 = 'https://www.thetelegraphandargus.co.uk/resources/images/11574659?type=responsive-gallery-fullscreen'
const image3 = 'https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2017/11/17/639329-indian-men.jpg'
const image4 = 'https://www.thestatesman.com/wp-content/uploads/2018/07/Palwinder-Singh.jpg'
const image5 = 'https://www.ramanmedianetwork.com/wp-content/uploads/2017/09/lichen.jpg'
const image6 = 'https://thumbs.dreamstime.com/t/young-man-exercise-clothing-park-beijing-china-33369498.jpg'
const image7 = 'https://s01.sgp1.digitaloceanspaces.com/inline/830706-58b1fbec92c95.jpg'

function HomeTab() {
  const users = [
    {
      userName: "Abdulrehman",
      userAge: 20,
      userStatus: "Offline",
      userImage: image3,
      bloodGroup: "A+"
    },
    {
      userName: "Smith Dave",
      userImage: image1,
      userStatus: "online",
      bloodGroup: "A+",
      userAge: 21
    },
    {
      userName: "James Reo",
      userImage: image2,
      userStatus: "online",
      bloodGroup: "AB+",
      userAge: 28,
    },
    {
      userName: "Maria Md.",
      userImage: image7,
      userStatus: "online",
      bloodGroup: "A+",
      userAge: 21
    },
    {
      userName: "Kumar Rao",
      userImage: image4,
      userStatus: "online",
      bloodGroup: "A+",
      userAge: 21
    },
    {
      userName: "mahim yadaw",
      userImage: image5,
      userStatus: "online",
      bloodGroup: "A+",
      userAge: 21
    },
    {
      userName: "Akram Siddiqui",
      userImage: image6,
      userStatus: "online",
      bloodGroup: "A+",
      userAge: 21
    },
    {
      userName: "moona Liza",
      userImage: image7,
      userStatus: "online",
      bloodGroup: "A+",
      userAge: 29
    },

  ];
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
          <List >
            {users.map((item, index) => {
              return <User key={index} {...item} />
            })}
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
  age: {
    color: 'green',
    paddingLeft: 10
  }
})



export default HomeTab;


