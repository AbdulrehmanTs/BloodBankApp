import React, {useState} from 'react'
import {View, Text, Button, StyleSheet, TextInput} from 'react-native'
import {Header, Title, Right, Body, Form, Item, Label, Input, CheckBox} from 'native-base'
import database from '@react-native-firebase/database'
import { AuthContext } from '../../Navigations/AuthProvider'

function Tab2(props){
    const [group, setGroup] = useState('')
    const [fullname, setFullName] = useState('');
    const [age, setAge] = useState('');
    const [lastDonate, setLastDonote] = useState('')


    const {register} = useContext(AuthContext);

    const submit = ()=>{
        let users= {
            fullname,
            age,
            group,
            lastDonate
        }
        console.log("User:> ", users)
        // database().ref('/').child('user').push(users)
        setFullName("")
        setAge("")

        props.navigation.navigate('Profile')

    }
    return(
        <>
            <Header style={{backgroundColor: 'white'}}>
                <Right>
                    <Body>
                        <Title style={{color: 'black'}}>Become a Donor</Title>
                    </Body>
                </Right>
            </Header>
        
        <View style={{ margin: 10 }}>
        <Form>
            <Item>
              <Label>Full Name</Label>
              <TextInput value={fullname} onChangeText={(text)=>setFullName(text)} placeholder={"Enter"} />
            </Item>

            <Item >
              <Label>Age</Label>
              <TextInput value={age} onChangeText={(text)=>setAge(text)} placeholder={'Enter'} />
            </Item>

            <Item style={styles.groupList} >
              <Label>Group: </Label>
                <Text style={styles.GText}>A+</Text>
                <CheckBox
                value={group}
                onValueChange={setGroup}
                style={styles.checkbox}
                />

              <Text style={styles.GText}>A-</Text>
              <CheckBox
                value={group}
                onValueChange={setGroup}
                style={styles.checkbox}
                />

              <Text style={styles.GText}>B+</Text>
              <CheckBox
                value={group}
                onValueChange={setGroup}
                style={styles.checkbox}
                />

              <Text style={styles.GText}>B-</Text>
              <CheckBox
                value={group}
                onValueChange={setGroup}
                style={styles.checkbox}
                />

              <Text style={styles.GText}>O+</Text>
              <CheckBox
                value={group}
                onValueChange={setGroup}
                style={styles.checkbox}
                />

              <Text style={styles.GText}>O-</Text>
              <CheckBox
                value={group}
                onValueChange={setGroup}
                style={styles.checkbox}
                />

              <Text style={styles.GText}>AB+</Text>
              <CheckBox
                value={group}
                onValueChange={setGroup}
                style={styles.checkbox}
                />

              <Text style={styles.GText}>AB-</Text>
              <CheckBox
                value={group}
                onValueChange={setGroup}
                style={styles.checkbox}
                />
            </Item>

            <Item >
              <Label>Last Donation</Label>
              <Input value={lastDonate} onChangeText={(text)=>setLastDonote(text)} placeholder={"Enter"} />
            </Item>

            <Button onPress={()=> register(email, password)} title={'Submit'}></Button>

          </Form>
          
        </View>
        </>
    )
  // }
}


const styles = StyleSheet.create({
    GText: {
        color: 'red',
        marginRight: -8
    },
    groupList: {
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    checkbox:{
        marginRight: 15
    }
});
export default Tab2;