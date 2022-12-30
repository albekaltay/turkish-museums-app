import React from "react";
import { View, StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import Button from "../components/Button";
import UserInfo from "../components/UserInfo";
import Welcome from "../components/Welcome";

const StartedScreen = ({ navigation }) => {
  return (
    <>
      <ImageBackground
        style={styles.rootScreen}
        imageStyle={styles.imageStyle}
        resizeMode={"cover"}
        source={require("../assets/istanbul-archeology-museum.jpg")}
      >
        <SafeAreaView style={styles.rootScreen}>
          <UserInfo />
          <Welcome />
          <View style={styles.buttonContainer}>
            <Button onPress={() => navigation.navigate("Museums")}>
              Let's Start
            </Button>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

export default StartedScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    justifyContent: "flex-start",
  },

  imageStyle: {
    opacity: 0.9,
  },
  buttonContainer: {
    marginHorizontal: 50,
    marginVertical: 50,
    justifyContent: "flex-end",
  },
});
