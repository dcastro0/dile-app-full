import { ButtonProps } from "@/interfaces/ButtonProps";
import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";

const MyButton = ({ title, ...rest }: ButtonProps) => {
  return (
    <Pressable style={styles.button} {...rest}>
      <Text style={styles.textWhite}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#122F61",
    width: 250,
    height: 40,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  textWhite: {
    color: "#fff",
    fontFamily: "Aldrich_400Regular",
    fontSize: 20,
  },
});

export { MyButton };
