import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screen/HomeScreen";
import FacultyListScreen from "./src/screen/FacultyListScreen";
import ProfileScreen from "./src/screen/ProfileScreen";
import Semester1 from "./src/screen/Semester1";
import Semester2 from "./src/screen/Semester2";
import Semester3 from "./src/screen/Semester3";
import SemesterScreen from "./src/screen/SemesterScreen";


const stack = createStackNavigator();
function App(){
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name ="Home" component={HomeScreen} />
        <stack.Screen name ="FacultyList" component={FacultyListScreen} />
        <stack.Screen name ="Profile" component={ProfileScreen} />
        <stack.Screen name ="Semester" component={SemesterScreen} />
        <stack.Screen name ="Semester1" component={Semester1} />
        <stack.Screen name ="Semester2" component={Semester2} />
        <stack.Screen name ="Semester3" component={Semester3} />
        
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App 