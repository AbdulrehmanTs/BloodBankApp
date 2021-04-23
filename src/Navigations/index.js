import React from 'react'
import AuthProvider from './AuthProvider'
import User from '../components/User'
import Routes from './Routes'

const Providers = () => {
    return (
        <AuthProvider>
                <Routes />
        </AuthProvider>
    )
}

export default Providers;