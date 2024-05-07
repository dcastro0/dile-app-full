import { StyleSheet } from "react-native";

const stylesLogin = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#51688F",
    alignItems: "center",
    justifyContent: "center",
  },

  form: {
    gap: 20,
  },

  title: {
    fontFamily: "Aldrich_400Regular",
    fontSize: 22,
    marginBottom: 80,
  },

  img: {
    width: 300,
    height: 300,
  },

  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fff",
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
});

export { stylesLogin };
