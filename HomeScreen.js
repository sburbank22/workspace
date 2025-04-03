import * as React from "react";
import { View, FlatList, Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles"; // Import styles

const exercises = [
  { id: "1", name: "Push-ups", type: "repetition", suggested: "Squats" },
  { id: "2", name: "Squats", type: "repetition", suggested: "Push-ups" },
  { id: "3", name: "Running", type: "duration", suggested: "Jump Rope" },
  { id: "4", name: "Jump Rope", type: "duration", suggested: "Running" },
];

export default function HomeScreen() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.button}>
      <Button
        title={item.name}
        onPress={() => {
          navigation.navigate(
            item.type === "repetition"
              ? "RepetitionExercise"
              : "DurationExercise",
            {
              exercise: item,
              allExercises: exercises,
            }
          );
        }}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercise Tracker</Text>
      <FlatList
        data={exercises}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
