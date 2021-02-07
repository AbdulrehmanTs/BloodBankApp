import React from 'react';
import {View, Text, Image} from 'react-native'


function ContactDonor(props) {
console.log(props)
    return(
        <>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                {/* <Image source={{uri: `${props.uri}`}} /> */}
                <Text>ContactDonor</Text>
                {/* <Text onPress={(props)=>props.navigation.navigate('About')}>ContactDonor</Text> */}
                
            </View>
        </>
    )
}

export default ContactDonor;