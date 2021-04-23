import React, { Component, useContext } from 'react'
import { Header, Right, Body, Title, } from 'native-base'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AuthContext } from '../Navigations/AuthProvider'
import { UserContext } from '../components/User'

const Profile = () => {
  const { user, logOut } = useContext(AuthContext)

  const { userName, userStatus, bloodGroup, userAge } = useContext(UserContext)

  return (
    <>
      <Header style={{ backgroundColor: 'white' }}>
        <Right>
          <Body>
            <Title style={{ color: 'black' }}>Become a Donor</Title>
          </Body>
        </Right>
      </Header>

      <View>
        <Text style={styles.welcomeHeader}>WELCOME</Text>
        <Text>{userName}</Text>
        <Text style={styles.welcomeDescription}>ThankYou You {user.email} have been Added to our Users list</Text>
        <TouchableOpacity
          onPress={() => logOut()}
        >
          <Text >Logout</Text>

        </TouchableOpacity>
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