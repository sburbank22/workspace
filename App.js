import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import RepetitionExercise from "./RepetitionExercise";
import DurationExercise from "./DurationExercise";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="RepetitionExercise"
          component={RepetitionExercise}
        />
        <Stack.Screen name="DurationExercise" component={DurationExercise} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
