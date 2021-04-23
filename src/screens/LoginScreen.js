import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import SocialButton from '../components/SocialButton'
import { useNavigation } from '@react-navigation/core'
import { AuthContext } from '../Navigations/AuthProvider'

const LoginScreen = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const { login } = useContext(AuthContext);


    const navigation = useNavigation()

    return (
            <View style={styles.container}>
                <Text style={styles.loginTitle}>Log in</Text>
                <FormInput
                    labelValue={email}
                    onChangeText={(userEmail) => setEmail(userEmail)}
                    iconType="mail"
                    placeholderText="Email Address"
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

                <FormButton
                    buttonTitle={"Log In"}
                    onPress={() => login (email, password)}
                />

                <View style={styles.registerText}>
                    <Text>Don't have an account? <Text style={styles.registerButton} onPress={() => navigation.navigate('SignupScreen')}> Register Here </Text> </Text>
                </View>

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


export default LoginScreen;


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
    }
})