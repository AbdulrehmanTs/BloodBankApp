import React , {createContext} from 'react';

export const userContext = createContext()

const UserContextProvider = ({children}) =>{
    return (
        <userContext.Provider value={{
            userName: "Abdi",
            userImage,
            userAge,
            userStatus,
            bloodGroup
        }}>
            {children}
        </userContext.Provider>
    )
}

export default UserContextProvider;