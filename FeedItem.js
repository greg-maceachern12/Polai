import React from "react";
import { View, Text, Image } from "react-native";

const FeedItem = ({ item }) => {
  return (
    <View style={{ marginBottom: 20 }}>
      <Image
        source={{ uri: item.imageUrl }}
        style={{ width: 200, height: 200 }}
      />
      <Text>{item.type}</Text>
      <Text>{item.title}</Text>
      <Text>Rank: {item.rank}</Text>
      <Text>Date: {item.date}</Text>
      <Text>{item.description}</Text>
    </View>
  );
};

export default FeedItem;
