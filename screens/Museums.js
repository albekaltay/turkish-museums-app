import React, { useState, useEffect } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Card from "../components/Card";
import { museumApiData } from "../api/museumApiData";
import Button from "../components/Button";



const Museums = ({ navigation }) => {
  const [text, onChangeText] = useState("");
  const [museums, setMuseums] = useState(museumApiData);

  const handleSearchInput = () => {
    const searchFilter = museumApiData.filter((museum) =>
      museum.name.includes(text)
    );
    setMuseums(searchFilter);
  };
  const handleResetSearchFilter = () => {
    setMuseums(museumApiData);
    onChangeText("")
  };

  useEffect(() => {
    if (text === "") {
      setMuseums(museumApiData);
    }
  });

  return (
    <View style={styles.containerScreen}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder={"Search Place Name..."}
          cursorColor={"#415332"}
          placeholderTextColor={"#415332"}
        />

        <View style={styles.buttonGroups}>
          <Button rowButton onPress={handleSearchInput}>
            {" "}
            Search
          </Button>
          <Button rowButton onPress={handleResetSearchFilter}>
            {" "}
            Reset Search
          </Button>
        </View>
      </View>
      <Card navigation={navigation} museums={museums} />
    </View>
  );
};

export default Museums;

const styles = StyleSheet.create({
  containerScreen: {
    flex: 1,
    backgroundColor: "#ddd1b5",
  },
  inputContainer: {
    padding: 8,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderColor: "#415332",
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  buttonGroups: { 
    padding: 5,
    width: "100%",
    flexDirection: "row" 
  },
});
