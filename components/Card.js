import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Pressable,
  Linking,
} from "react-native";

import Button from "./Button";
import { Entypo } from "@expo/vector-icons";
import { openUrl } from "../utilities";

const Card = ({ navigation, museums }) => {
  const handleClickCard = (id) => {
    const findClickedMuseum = museums.find((musem) => musem.id === id);
    navigation.push("Detail Screen", findClickedMuseum);
  };

  return (
    <>
      <ScrollView>
        {museums.map((museum) => (
          <Pressable key={museum.id} 
            onPress={() => {
              handleClickCard(museum.id);
            }}
          >
            <View style={styles.card}>
              <View style={styles.container}>
                <View style={styles.body}>
                  <Text style={styles.bodyTitle}>
                    {museum.id} - {museum.name}
                  </Text>
                  {/* <Text style={styles.bodyContent}> 
             
            </Text> */}
                  <View style={styles.bodyImageContainer}>
                    <Image
                      resizeMode="cover"
                      style={styles.bodyImage}
                      source={{ uri: museum.img }}
                    />
                  </View>
                  <View style={styles.buttonContainer}>
                    <Button
                      icon={<Entypo name="location" size={24} color="white" />}
                      onPress={() => {
                        openUrl(museum.locationUrl);
                        // <BottomSheetComponent />
                      }}
                    >
                      Location
                    </Button>
                  </View>
                </View>
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </>
  );
};

export default Card;

const styles = StyleSheet.create({
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
    // color: Colors.grey_900,
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
