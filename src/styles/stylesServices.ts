import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

const stylesServices = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },

  containerCard: {
    backgroundColor: COLORS.background,
    alignItems: "center",
    padding: 20,
    borderRadius: 15,
    elevation: 2,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.blue,
  },

  card: {
    minWidth: 280,
    backgroundColor: COLORS.cardServiceSecondary,
    padding: 10,
    borderRadius: 15,
    borderBottomEndRadius: 0,
    gap: 7,
  },

  textGreen: {
    color: COLORS.green,
    fontSize: 22,
  },

  valor: {
    borderWidth: 1,
    borderColor: COLORS.cardServiceSecondary,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    padding: 3,
    alignSelf: "flex-end",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },

  data: {
    marginLeft: 20,
    fontSize: 18,
  },

  text18: {
    fontSize: 18,
    maxWidth: 280,
  },

  button: {
    backgroundColor: COLORS.green,
    flexDirection: "row",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    alignSelf: "flex-end",
  },

  textWhite: {
    fontSize: 18,
    color: COLORS.white,
  },

  description: {
    maxWidth: 280,
  },
});

export { stylesServices };
