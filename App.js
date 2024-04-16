// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import SearchScreen from "./src/screens/SearchScreen/SearchScreen";
import SettingsScreen from "./src/screens/SettingsScreen/SettingsScreen";

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
          options={{
            tabBarIcon: makeIconRender("home"),
            headerTitle: "Hello Robin",
          }}
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

export default App;