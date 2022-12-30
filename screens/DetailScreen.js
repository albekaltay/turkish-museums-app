import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Button from "../components/Button";
import { openUrl } from "../utilities";
import { Entypo } from "@expo/vector-icons";

const DetailScreen = ({ route }) => {
  const { id, name, img, content, locationUrl } = route.params;
  console.log(name);
  return (
    <ScrollView>
      <View style={styles.containerScreen}>
        <View style={styles.card}>
          <View style={styles.container}>
            <View style={styles.body}>
              <Text style={styles.bodyTitle}>
                {id} - {name}
              </Text>
              <Text style={styles.bodyContent}>{content}</Text>
              <View style={styles.bodyImageContainer}>
                <Image
                  resizeMode="cover"
                  style={styles.bodyImage}
                  source={{ uri: img }}
                />
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  icon={<Entypo name="location" size={24} color="white" />}
                  onPress={() => {
                    openUrl(locationUrl);
                  }}
                >
                  Location
                </Button>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  containerScreen: {
    flex: 1,
    backgroundColor: "#ddd1b5",
  },
  card: {
    // minHeight: 180,
    marginBottom: 9,
    backgroundColor: "#f5f3e6",
  },
  container: {
    paddingVertical: 17,
    paddingHorizontal: 20,
  },
  body: {
    // minHeight: 70,
    marginBottom: 10,
  },
  bodyTitle: {
    color: "#6d855b",
    fontSize: 15,
    lineHeight: 22,
    //  fontFamily:  "Poppins-SemiBold",
    marginBottom: 20,
    fontWeight: "bold",
    fontSize: 18,
  },
  bodyContent: {
    color: "#788b62",
    //  fontFamily:  "Poppins-Regular",
    fontSize: 13,
    lineHeight: 20,
    marginBottom: 13,
  },

  bodyImageContainer: {
    padding: 7,
    backgroundColor: "#ddd1b5",
    borderRadius: 8,
  },
  bodyImage: { width: "100%", height: 400, flex: 1, borderRadius: 8 },
  buttonContainer: {
    marginHorizontal: 50,
    marginVertical: 50,
    justifyContent: "flex-end",
  },
});
