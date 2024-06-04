import { StyleSheet } from "react-native";

const stylesCompleted = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#E7EAEF",
    justifyContent: "center",
    padding: 10,
  },

  card: {
    width: 280,
    backgroundColor: "#c2cbd7",
    alignItems: "center",
    padding: 20,
    borderRadius: 15,
    elevation: 2,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#122f61",
  },
});

export { stylesCompleted };
