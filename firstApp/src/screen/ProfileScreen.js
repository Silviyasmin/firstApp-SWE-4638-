import React from 'react';
import { Text, StyleSheet, View, Image } from "react-native";

const ProfileScreen = () =>{
    return(
        <View style={styles.viewStyle}>
            <Image style = {styles.imageStyle}
                source = {require('../../assets/profile.png')}
            />
            <Text style = {styles.textStyle}>
            Name: Khan Silvi Yasmin{"\n"}{"\n"}
            Student ID: 170042053{"\n"}{"\n"}
            Room No: 202 Utility Building{"\n"}{"\n"}
            Email: silviyasmin@iut-dhaka.edu
            </Text>
        </View>
    );
}
const styles = StyleSheet.create(
    {
        textStyle: {
            fontSize: 20,
            color: 'black',
            marginTop: 50,
            alignSelf: 'center',
        },
        viewStyle: {
            marginVertical: 50,
            marginHorizontal: 25,
            alignSelf: 'center',
        },
        imageStyle:
        {
            height: 250,
            width: 200,
            alignSelf: 'center',
            marginTop: 25,
            
            
        },
    }
);
export default ProfileScreen;
  