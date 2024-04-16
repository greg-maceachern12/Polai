// SearchScreen.js
import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./SearchScreen.styles";

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search</Text>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        // Add your search functionality
      />
    </View>
  );
};

export default SearchScreen;