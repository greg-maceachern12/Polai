// FeedItem.js
import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../../screens/HomeScreen/HomeScreen.styles";

const FeedItem = ({ item }) => (
  <>
    <Image source={item.image} style={styles.image} />
    <View style={styles.content}>
      <Text style={styles.type}>{item.type}</Text>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.rank}>Rank: {item.rank}</Text>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  </>
);

export default FeedItem;