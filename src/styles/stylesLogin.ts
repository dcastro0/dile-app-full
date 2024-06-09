import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

const stylesLogin = StyleSheet.create({
  scroll: { flex: 1, backgroundColor: "#51688F" },
  container: {
    flex: 1,
    backgroundColor: "#51688F",
    alignItems: "center",
    justifyContent: "center",
  },

  form: {
    gap: 20,
    alignItems: "center",
  },

  title: {
    fontFamily: "Aldrich_400Regular",
    fontSize: 22,
    marginBottom: 10,
  },

  img: {
    width: 300,
    height: 300,
  },

  input: {
    width: "100%",
    minWidth: 280,
    height: 40,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fff",
    elevation: 3,
  },

  inputSelected: {
    width: "80%",
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#51688F",
    color: "#fff",
    fontSize: 24,
  },

  containerInput: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  titleWhite: {
    fontFamily: "Aldrich_400Regular",
    fontSize: 30,
    marginBottom: 80,
    color: "#fff",
  },

  containerRow: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 20,
  },

  register: {
    alignSelf: "center",
    fontSize: 10,
  },

  newaccount: {
    fontSize: 14,
    color: COLORS.white,
    fontFamily: "Aldrich_400Regular",
  },

  titleform: {
    fontFamily: "Aldrich_400Regular",
    fontSize: 22,
    color: COLORS.white,
    alignSelf: "center",
  },

  line: {
    height: 2,
    width: "80%",
    backgroundColor: COLORS.cardPrimary,
  },
});

export { stylesLogin };
