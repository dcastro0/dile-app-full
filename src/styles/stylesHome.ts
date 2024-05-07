import { StyleSheet } from "react-native";

const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#E7EAEF",
  },

  navbar: {
    flex: 0,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 80,
  },

  line: {
    height: 2,
    width: "80%",
    backgroundColor: "#adadad",
  },

  card1: {
    backgroundColor: "#455B82",
    padding: 20,
    borderRadius: 20,
  },

  textWhite22: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },

  cardItem: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  textWhite36: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "bold",
  },

  cards: {
    flex: 0,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  cardCanceled: {
    backgroundColor: "#455B82",
    width: 170,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    borderWidth: 1,
  },

  cardInProgress: {
    backgroundColor: "#455B82",
    width: 170,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    borderWidth: 1,
  },

  cardCompleted: {
    backgroundColor: "#455B82",
    width: 310,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },

  cardItem2: {
    alignItems: "center",
    paddingHorizontal: 40,
    paddingVertical: 20,
  },

  myCard: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#d9d9d9",
    width: 90,
    height: 90,
    borderRadius: 20,
  },

  textBlue24: {
    color: "#122F61",
    fontSize: 24,
    fontWeight: "bold",
  },

  textBlue16: {
    color: "#122F61",
    fontSize: 16,
    fontWeight: "bold",
  },

  cardsColumn: {
    flex: 0,
    flexDirection: "column",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  row: {
    flex: 0,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },

  containerIcon: {
    borderTopWidth: 3,
    height: "100%",
    borderColor: "#122F61",
    justifyContent: "center",
  },
});

export { stylesHome };
