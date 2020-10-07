import React from "react";
import { Text, View, FlatList, StyleSheet} from "react-native";
const Semester2 = () => {
    const course = [
        { name: "CSE 4205", key: 1 },
        { name: "CSE 4206", key: 2 },
        { name: "Math 4243", key: 3 },
        { name: "SWE 4207", key: 4 },
        { name: "HUM 4243", key: 5 },
        { name: "Phy 4245", key: 6 },
      ];
      return (
        <View style={styles.viewStyle}>
            <Text style={styles.titleStyle}>Course List of 2nd Semester</Text>
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
export default Semester2;
