import React, { useContext } from 'react';
import { View, Text } from 'react-native'
import { userContext } from '../components/User'



function ContactDonor() {
    const { userName } = useContext(userContext)
    return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>{userName}</Text>
            </View>
    )
}

export default ContactDonor;