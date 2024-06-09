import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";
import { ButtonProps } from "@/interfaces/ButtonProps";

const MyButton: React.FC<ButtonProps> = ({ title, ...buttonProps }) => {
  return (
    <Pressable style={styles.button} {...buttonProps}>
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
    elevation: 3,
  },

  textWhite: {
    color: "#fff",
    fontFamily: "Aldrich_400Regular",
    fontSize: 20,
  },
});

export { MyButton };
