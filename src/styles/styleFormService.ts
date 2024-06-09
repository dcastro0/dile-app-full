import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

const stylesFormService = StyleSheet.create({
  scroll: {
    backgroundColor: "#E7EAEF",
    padding: 16,
  },
  container: {
    flex: 1,
    gap: 20,
  },
  input: {
    borderBottomWidth: 1,
    paddingLeft: 10,
    marginHorizontal: 10,
  },
  progress: {
    flexDirection: "row",
    width: "60%",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 40,
  },
  progressB: {
    flexDirection: "row",
    width: "100%",
  },
  progressCard: {
    padding: 0,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    minWidth: "100%",
    borderWidth: 1,
    borderRadius: 10,
    gap: 10,
  },
  select: {
    borderRadius: 50,
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#9B9B9B",
    marginTop: 5,
  },
  selectIn: {
    borderRadius: 50,
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#41AE76",
    marginTop: 5,
  },
  title: {
    fontSize: 25,
    color: "#606060",
  },
  adicionar: {
    color: "#606060",
    fontSize: 18,
    alignSelf: "flex-end",
  },
  textArea: {
    borderWidth: 1,
    padding: 8,
    height: 100,
    borderRadius: 10,
  },
  textProgress: {
    color: "#717171",
    fontSize: 16,
  },
  confirm: {
    backgroundColor: "#41AE76",
    width: "50%",
    borderBottomLeftRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 60,
  },
  cancel: {
    backgroundColor: "#FF0000",
    width: "50%",
    borderBottomRightRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 60,
  },
  delete: {
    flex: 1,
    alignItems: "flex-end",
    flexDirection: "row",
  },
  error: {
    color: "#ff0000",
    fontStyle: "italic",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
  },

  errorText: {
    color: COLORS.red,
    fontWeight: "bold",
  },
});

export { stylesFormService };
