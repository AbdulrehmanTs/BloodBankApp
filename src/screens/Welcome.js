import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'


function welcome(){
    return(
        <>
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Image style={styles.image} source={require('../assets/blood-cartoon-logo.png')} />
            <Text style={styles.maintext}>Welcome To Mobile Blood Bank Application</Text>
            <Text style={styles.author}>By Abdulrehman tahir siddique </Text>
        </View>
        </>
    )
}


const styles = StyleSheet.create({
    maintext: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 50,
        padding: 20
    },
    image: {
        width: 300,
        height: 300,
    },
    author: {
        alignItems: 'flex-end'
    }
});
export default welcome;