
import React from 'react'
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native'


function Tab3(){
    return(
        <ScrollView >
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Image style={{width: 150, height: 150, marginTop: 20, marginBottom: 20}} source={require('../../assets/blood-cartoon-logo.png')} />
                <Text style={styles.Heading}>Blood Bank Application</Text>
                <Text style={styles.Description} >This project acts as an important role in saving life of human beings and which is also its main aim. The project Mobile App Blood Bank system is developed so that users can view the information about registered blood donors such as name, address, and other such personal information along with their details of blood group and other medical information of donor. The project also has a login page where in the user is required to register and only then can view the availability of blood and May also register to donate blood if he/she wishes to. This project requires internet access and thus there is a disadvantage of internet failure. Thus this application helps to select the right donor online instantly using medical details along with the blood group. The main aim of developing this application is to reduce the time to a great extent that is spent in searching for the right donor and the availability of blood required. Thus this application provides the required information in no time and also helps in quicker decision making.</Text>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    Heading: {
        fontSize: 24,
    },
    Description: {
        marginRight: 20,
        marginLeft: 20,
        fontSize: 15,
        
    }
});
export default Tab3;