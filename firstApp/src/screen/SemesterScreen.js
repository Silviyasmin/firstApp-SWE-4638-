  import React from 'react';
  import { StyleSheet, View, Button } from "react-native";

const SemesterScreen = (props) =>{
    
    return(
        <View style={styles.viewStyle}>
            <View style={styles.buttonStyle}>
                <Button 
                title="1st Semester "
                onPress={function (){
                props.navigation.navigate("Semester1");
                }}
                color="green"
            
                />
            </View>
            <View style={styles.buttonStyle}>
                <Button 
                title="2nd Semester "
                onPress={function (){
                props.navigation.navigate("Semester2");
                }}
                color="green"
            
                />
            </View>
            <View style={styles.buttonStyle}>
                <Button 
                title="3rd Semester "
                onPress={function (){
                props.navigation.navigate("Semester3");
                }}
                color="green"
            
                />
            </View>
        </View>
    );
}
 
const styles = StyleSheet.create(
    {
        
        viewStyle: 
        {
            margin: 50,
            alignSelf: 'center',
        },
        buttonStyle:
        {
            
            margin: 50,
            
        }
    }
);
export default SemesterScreen; 
