import React, { useState } from "react";
import { View, Text, Button } from "react-native";

export default function RepetitionExercise({ route, navigation }) {
  const { exercise, allExercises } = route.params;
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>{exercise.name}</Text>
      <Text>Repetitions: {count}</Text>
      <Button title="Increase Count" onPress={() => setCount(count + 1)} />
      <Button title="Reset" onPress={() => setCount(0)} />
      <Button
        title="Suggested: Go to {exercise.suggested}"
        onPress={() =>
          navigation.navigate("RepetitionExercise", {
            exercise: allExercises.find((e) => e.name === exercise.suggested),
            allExercises,
          })
        }
      />
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
