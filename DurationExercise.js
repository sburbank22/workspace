import React, { useState } from "react";
import { View, Text, Button } from "react-native";

export default function DurationExercise({ route, navigation }) {
  const { exercise, allExercises } = route.params;
  const [time, setTime] = useState(0);
  let timer = null;

  const startTimer = () => {
    timer = setInterval(() => setTime((prevTime) => prevTime + 1), 1000);
  };

  const resetTimer = () => {
    clearInterval(timer);
    setTime(0);
  };

  return (
    <View>
      <Text>{exercise.name}</Text>
      <Text>Time: {time} seconds</Text>
      <Button title="Start Timer" onPress={startTimer} />
      <Button title="Reset" onPress={resetTimer} />
      <Button
        title={`Suggested: Go to ${exercise.suggested}`}
        onPress={() =>
          navigation.navigate("DurationExercise", {
            exercise: allExercises.find((e) => e.name === exercise.suggested),
            allExercises,
          })
        }
      />
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
