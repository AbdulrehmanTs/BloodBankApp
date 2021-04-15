import React, { createContext, useState } from 'react'
import auth from '@react-native-firebase/auth'
// import LoginScreen from '../screens/LoginScreen'
// import RegisterScreen from '../screens/RegisterScreen'

export const AuthContext = createContext();


const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null)
    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) =>{
                    try {
                        await auth().logInWithEmailAndPassword(email, password)
                    } catch(e){
                        console.log(e);
                    }
                },
                register: async (email, password) => {
                    try {
                        await auth().createUserWithEmailAndPassword(email, password)
                    } catch (e){
                        console.log(e)
                    }
                },
                logOut: async () => {
                    try {
                        await auth().signOut()
                    }catch(e){
                        console.log(e)
                    }
                }
            }}

        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;