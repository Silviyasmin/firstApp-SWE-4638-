import React from "react";
import { Text, StyleSheet, View, Button, Image, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
    return (<View>
        <Image style={styles.imageStyle}
            source = {require ('../../assets/IUT_logo.png')}
        />
        <Text style={styles.textStyle}>Department of CSE</Text>
        <Text style={styles.textStyle}>Program: SWE</Text>
    <TouchableOpacity onPress={function (){props.navigation.navigate("Profile");}}>
        <Text style={styles.touchStyle}>My Profile</Text>
    </TouchableOpacity>
        
    <View style={styles.buttonStyle}>
    <Button
            title="Semesterwise Course List"
            onPress={function (){
                props.navigation.navigate("Semester");
            }}
            color="green"
        />
    </View>
        
    <View style={styles.buttonStyle}>
    <Button 
            title="List of Faculty Members"
            onPress={function (){
                props.navigation.navigate("FacultyList");
            }}
            color="green"
            
        />
    </View>
        
    </View>
    );
    
}

const styles = StyleSheet.create(
    {
        textStyle:
        {
            fontSize: 30,
            color: "black",
            alignSelf: 'center',
            //margin: 20,
        },
        imageStyle:
        {
           height: 410,
           width: 250,
           alignSelf: 'center',
           margin: 10,
        },
        buttonStyle:
        {
            margin: 10,
            
        },
        touchStyle:
        {
            fontSize: 30,
            color: 'green',
            alignSelf: 'center',
            textDecorationLine: 'underline',
        },
    }

);

export default HomeScreen