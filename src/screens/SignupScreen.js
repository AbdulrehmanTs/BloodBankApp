import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import SocialButton from '../components/SocialButton'
import { useNavigation } from '@react-navigation/core'
import { AuthContext } from '../Navigations/AuthProvider'
import database from '@react-native-firebase/database';

const reference = database().ref('/users');

const SignupScreen = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const { register } = useContext(AuthContext)
    const navigation = useNavigation()


    // reference.on("value", snapshot=>{
    //     console.log("user Data", snapshot.val())
    // })

    const submit = () => {
        register(email, password);
        reference.set({name, email, password})
    }
    return (
        <View style={styles.container}>
            <Text style={styles.loginTitle}>Register New Account</Text>
            <FormInput
                labelValue={name}
                onChangeText={(userName) => setName(userName)}
                iconType="user"
                placeholderText="User Name"
            />
            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                iconType="mail"
                placeholderText="Email"
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                iconType="lock"
                placeholderText="Password"
                secureTextEntry={true}
            />
            <FormInput
                labelValue={confirmPassword}
                onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
                iconType="lock"
                placeholderText="confirm password"
                secureTextEntry={true}
            />

            <FormButton
                buttonTitle={"Register"}
                onPress={() => submit()}
            />

            <TouchableOpacity
                style={styles.navButton}
                onPress={() => navigation.navigate('LoginScreen')}>
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


export default SignupScreen;


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