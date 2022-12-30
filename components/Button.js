import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const Button = ({ children, onPress, icon, rowButton }) => {
  return (
    <View style={[styles.buttonOuterContainer, rowButton && { flex: 1 }]}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: "black" }}
        onPress={onPress}
      >
        <View style={{ flexDirection: "row" }}>
          <Text>{icon} </Text>
          <Text style={styles.buttonText}> {children} </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    overflow: "hidden",
    borderRadius: 14,
  },
  buttonInnerContainer: {
    backgroundColor: "#415332",
    alignItems: "center",
    paddingVertical: 12,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    marginTop: 2,
    marginRight: 2,
  },
  // For ios ripple
  pressed: {
    opacity: 0.75,
  },
});
