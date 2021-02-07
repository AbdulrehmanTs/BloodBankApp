import React,{Component} from 'react'
import {Header, Right, Body, Title,} from 'native-base'
import {View, Text, StyleSheet} from 'react-native'


const Profile = ()=>{
return(
    <>
    <Header style={{backgroundColor: 'white'}}>
          <Right>
              <Body>
                  <Title style={{color: 'black'}}>Become a Donor</Title>
              </Body>
          </Right>
      </Header>

      <View>
        <Text style={styles.welcomeHeader}>WELCOME</Text>
        <Text style={styles.welcomeDescription}>ThankYou You have been Added to the list</Text>
      </View>
    </>
  )
}

export default Profile;


const styles = StyleSheet.create({
    welcomeHeader: {
        fontSize: 40,
        color: 'blue'
    }
})