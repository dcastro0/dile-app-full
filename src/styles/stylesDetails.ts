import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

const stylesDetails = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E7EAEF",
  },

  card: {
    width: "90%",
    backgroundColor: COLORS.cardServiceSecondary,
    height: "90%",
    borderRadius: 20,
    alignItems: "flex-start",
    gap: 5,
    padding: 10,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  text18: {
    fontSize: 18,
    color: COLORS.blue,
    paddingLeft: 10,
  },
  text22: {
    fontSize: 22,
    color: COLORS.white,
  },
  title: {
    fontSize: 28,
    color: COLORS.blue,
    alignSelf: "center",
    marginRight: "20%",
    fontWeight: "bold",
  },
  price: {
    alignSelf: "flex-end",
    flexDirection: "row",
  },
  textPrice: {
    fontSize: 22,
    color: COLORS.green,
  },
  head: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    gap: 10,
    alignItems: "center",
  },
});

export { stylesDetails };
