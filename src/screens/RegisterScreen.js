import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import SocialButton from '../components/SocialButton'
import { useNavigation } from '@react-navigation/core'
import {AuthContext} from '../Navigations/AuthProvider'

const Register = () => {
    const [fullName, setFullName] = useState();
    const [email, setEmail] = useState();
    const { Register } = useContext(AuthContext)
    
    
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Text style={styles.loginTitle}>Log in</Text>
            <FormInput
                labelValue={fullName}
                onChangeText={(userName) => setFullName(userName)}
                iconType="user"
                placeholderText="Enter Full Name"
            />
            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                iconType="mail"
                placeholderText="Email"
            />

            <FormButton
                buttonTitle={"Register"}
                onPress={() => Register(fullName, email)}
            />

            <TouchableOpacity
                style={styles.navButton}
                onPress={() => navigation.navigate('loginScreen')}>
                <Text style={styles.navButtonText}>Have an account? Sign In</Text>
            </TouchableOpacity>

            <SocialButton
                buttonTitle={"Log in with Facebook"}
                btnType={"facebook"}
                color="#4867aa"
                backgroundColor="#e6eaf4"
                onPress={() => fbLogin()}
            />

            <SocialButton
                buttonTitle={"Log In with Google"}
                btnType={"google"}
                color="#de4d41"
                backgroundColor="#f5e7ea"
                onPress={() => googleLogin()}
            />
        </View>
    )
}


export default Register;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    loginTitle: {
        fontSize: 24,
        fontFamily: 'arial',
        color: 'blue',
    },
    registerText: {
        margin: 20,

    },
    registerButton: {
        color: 'red'
    },
    navButton: {
    marginTop: 15,
    },
    navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
    },
})