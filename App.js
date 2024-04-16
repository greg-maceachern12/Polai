import React from "react";
import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const data = [
  {
    id: "1",
    image: require("./assets/test1.jpeg"),
    type: "Article",
    title: "The Benefits of Meditation",
    rank: 4.5,
    date: "May 1, 2023",
    description:
      "Learn about the scientifically proven benefits of meditation and how it can improve your mental well-being.",
  },
  {
    id: "2",
    image: require("./assets/test2.jpeg"),
    type: "Video",
    title: "Yoga for Beginners",
    rank: 4.2,
    date: "April 28, 2023",
    description:
      "Get started with yoga with this beginner-friendly video tutorial.",
  },
  {
    id: "2",
    image: require("./assets/test2.jpeg"),
    type: "Video",
    title: "Yoga for Beginners",
    rank: 4.2,
    date: "April 28, 2023",
    description:
      "Get started with yoga with this beginner-friendly video tutorial.",
  },
  {
    id: "2",
    image: require("./assets/test2.jpeg"),
    type: "Video",
    title: "Yoga for Beginners",
    rank: 4.2,
    date: "April 28, 2023",
    description:
      "Get started with yoga with this beginner-friendly video tutorial.",
  },
  {
    id: "2",
    image: require("./assets/test2.jpeg"),
    type: "Video",
    title: "Yoga for Beginners",
    rank: 4.2,
    date: "April 28, 2023",
    description:
      "Get started with yoga with this beginner-friendly video tutorial.",
  },
  // Add more data items here
];

const FeedItem = ({ item }) => (
  <View style={styles.card}>
    <Image source={item.image} style={styles.image} />
    <View style={styles.content}>
      <Text style={styles.type}>{item.type}</Text>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.rank}>Rank: {item.rank}</Text>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  </View>
);

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <FeedItem item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Search Screen</Text>
    </View>
  );
};

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

const makeIconRender = (name) => ({ color, size }) => (
  <Ionicons name={name} color={color} size={size} />
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ tabBarIcon: makeIconRender("home") }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{ tabBarIcon: makeIconRender("search") }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ tabBarIcon: makeIconRender("settings") }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  list: {
    padding: 16,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  content: {
    padding: 16,
  },
  type: {
    fontSize: 14,
    color: "#888888",
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  rank: {
    fontSize: 14,
    color: "#888888",
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
    color: "#888888",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
  },
});

export default App;
