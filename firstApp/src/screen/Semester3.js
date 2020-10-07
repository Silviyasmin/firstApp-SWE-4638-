import React from "react";
import { Text, View, FlatList, StyleSheet} from "react-native";
const Semester3 = () => {
    const course = [
        { name: "CSE 4305", key: 1 },
        { name: "CSE 4306", key: 2 },
        { name: "Math 4343", key: 3 },
        { name: "SWE 4307", key: 4 },
        { name: "HUM 4347", key: 5 },
        { name: "HUM 4345", key: 6 },
      ];
      return (
        <View style={styles.viewStyle}>
            <Text style={styles.titleStyle}>Course List of 3rd Semester</Text>
            <FlatList
                data={course}
                renderItem={function ({ item }) {
                return <Text style={styles.textStyle}>{item.key}. {item.name}</Text>;
                }}
            />
        </View>
      );
}
const styles = StyleSheet.create(
    {
        textStyle: 
        {
            fontSize: 20,
            color: "black",
            marginVertical: 25,
            alignSelf: 'center',
        },
        viewStyle: 
        {
            margin: 50,
            alignSelf: 'center'
        },
        titleStyle:
        {
            fontSize: 20,
            color: 'black',
            textDecorationLine: 'underline',
            
        },
    }
);
export default Semester3;
