import { StyleSheet } from "react-native";

const stylesProfile = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#E7EAEF",
  },

  card: {
    width: "80%",
    justifyContent: "center",
    backgroundColor: "#fff",
    alignItems: "center",
    flex: 2,
    borderRadius: 10,
  },

  text: {
    fontSize: 24,
    color: "#122f61",
    fontWeight: 'bold'
  },

  row: {
    width: '90%',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },

  circle: {
    padding: 10,
    backgroundColor: "#A5BCDB",
    borderRadius: 30 ,
  }
});

export { stylesProfile };
