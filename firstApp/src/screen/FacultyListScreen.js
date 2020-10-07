import React from 'react';
import { Text, StyleSheet, View, FlatList } from "react-native";

const FacultyListScreen = () =>{
    const faculty=[
        {name: "Tasnim Ahmed",key:1},
        {name: "Mohayminul Islam",key:2},
        {name: "Sohel Ahmed",key:3},
        {name: "Md. Abdul Hakim",key:4},
        {name: "Sabbir Ahmed",key:5},
        {name: "Bakhtiar Hasan",key:6},
    ];
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.titleStyle}>Name of Faculty Members</Text>
            <FlatList
            data = {faculty}
                renderItem = {function({item}){
                    return (<Text style={styles.textStyle}>{item.key}. {item.name}</Text>);
                }}

            />
                
        </View>
    );
}

const styles = StyleSheet.create(
    {
        textStyle: {
            fontSize: 20,
            color: 'black',
            marginVertical: 25, 
            //alignSelf: 'center',
        },
        viewStyle: {
            //borderColor: 'red',
            margin: 50,
            alignSelf: 'center',
            
            
        },
        titleStyle:
        {
            fontSize: 20,
            color: 'black',
            textDecorationLine: 'underline',

        },
    }
);
export default FacultyListScreen;