import React from "react";
import { Text, View, FlatList, StyleSheet} from "react-native";
const Semester1 = () => {
    const course = [
        { name: "CSE 4105", key: 1 },
        { name: "CSE 4106", key: 2 },
        { name: "Math 4143", key: 3 },
        { name: "SWE 4107", key: 4 },
        { name: "HUM 4143", key: 5 },
        { name: "HUM 4145", key: 6 },
      ];
      return (
        <View style={styles.viewStyle}>
            <Text style={styles.titleStyle}>Course List of 1st Semester</Text>
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
export default Semester1;
