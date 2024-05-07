import { StyleSheet } from "react-native";

const stylesServices = StyleSheet.create({
  scroll:{ 
    backgroundColor: '#e7eaef',
    
  },
  container: {
    flex: 1,
    gap: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  
  },

  containerCard: {
    width: "90%",
    backgroundColor: "#EAF3FF",
    alignItems: "center",
    padding: 20,
    borderRadius: 15,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#122f61",
  },

  card: {
    backgroundColor: "#C2CBD7",
    padding: 10,
    borderRadius: 15,
    borderBottomEndRadius: 0,
    gap: 7,
  },

  textGreen: {
    color: "#41AE76",
    fontSize: 22,
  },

  valor: {
    borderWidth: 1,
    borderColor: "#c2cbd7",
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    padding: 3,
    alignSelf: "flex-end",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  data: {
    marginLeft: 20,
    fontSize: 18,
  },

  text18: {
    fontSize: 18,
  },

  button :{
    backgroundColor: '#41AE76',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'flex-end'
  },
  
  textWhite: {
    fontSize: 18,
    color: '#fff'
  }
});

export { stylesServices };
