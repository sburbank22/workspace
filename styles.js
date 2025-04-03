import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8f5e9", // Light green background color
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#388e3c", // Dark green color for title
    marginBottom: 20,
  },
  button: {
    marginVertical: 10,
    width: "100%", // Full width for buttons
    paddingHorizontal: 15,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff", // White text for button labels
    fontWeight: "bold",
  },
  flatList: {
    width: "100%",
  },
});
