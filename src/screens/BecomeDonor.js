import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { UserContext } from '../components/User'
import { AuthContext } from '../Navigations/AuthProvider'

export default function BecomeDonor() {
    const {user, logOut} = useContext(AuthContext)
    return (
        <View>
            <Text>{user.email}</Text>
            <Text onPress={()=>logOut()}>logOut</Text>
        </View>
    )
}
