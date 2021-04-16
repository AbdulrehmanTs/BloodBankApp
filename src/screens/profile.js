import React, { Component, useContext } from 'react'
import { Header, Right, Body, Title, } from 'native-base'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AuthContext } from '../Navigations/AuthProvider'

const Profile = () => {
  const { logOut } = useContext(AuthContext)

  const { user } = useContext(AuthContext)

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
        <Text style={styles.welcomeDescription}>ThankYou You {user.email} have been Added to the list</Text>
        <TouchableOpacity 
        onPress={() => logOut() }
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