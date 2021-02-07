import React from 'react';
import {View, Text, StyleSheet} from 'react-native'



function About(){
    return(
        <View style={styles.wrapper}>
            <Text style={styles.text}>Hello About</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 30,
        color: '#000'
    }

})

export default About;
