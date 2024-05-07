import { StyleSheet } from "react-native";

const stylesCompleted = StyleSheet.create({
  scroll: {
    backgroundColor: "#e7eaef",
  },

  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#E7EAEF",
  },

  card: {
    width: "90%",
    height: 80,
    backgroundColor: "#C2CBD7",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "center",
    margin: 10,
    borderRadius: 10,
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
