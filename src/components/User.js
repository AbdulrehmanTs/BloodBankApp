import React, { createContext } from 'react'
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/core';
import { ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

const userContext = createContext()

const User = ({
    children,
    userImage,
    userName,
    userStatus,
    bloodGroup,
    userAge,
}) => {

    const navigation = useNavigation()
    return (
        <userContext.Provider value={{
            userName,
            userImage,
            userAge,
            userStatus,
            bloodGroup
        }}>
            {children}
            <ListItem thumbnail>
                <Left>
                    <Thumbnail circle source={{ uri: userImage }} />
                </Left>

                <Body>
                    <Text name="Smith Dav">{userName} <Text note >{userStatus}</Text></Text>

                    <Text note numberOfLines={1} style={styles.bldGroup} >{bloodGroup}
                        <Text note style={styles.age} >Age {userAge}</Text>
                    </Text>
                </Body>

                <Right>
                    <Button transparent onPress={() => navigation.navigate('ContactDonor')}>
                        <Text>Contact</Text>
                    </Button>
                </Right>
            </ListItem>
        </userContext.Provider>
    )
}

export default User;
export {
    userContext
}


const styles = StyleSheet.create({
    bldGroup: {
        color: 'red',
        marginLeft: 10,
    },
    age: {
        color: 'green',
        paddingLeft: 10
    }
})
