import React, { createContext } from 'react'
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/core';
import { ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

export const UserContext = createContext()

const User = ({ children, userName, userAge, userStatus, bloodGroup, userImage }) => {

    const navigation = useNavigation()
    return (
        <UserContext.Provider value={{
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
                    <Text> {userName} <Text note >{userStatus}</Text></Text>

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
        </UserContext.Provider>
    )
}

export default User;


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
