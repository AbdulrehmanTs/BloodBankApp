import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native'



function ContactDonor() {
    const { wrapper } = styles;
    return (
        <View style={wrapper}>
            <Text>your Age is 25</Text>
        </View>
    )
}

export default ContactDonor;


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})