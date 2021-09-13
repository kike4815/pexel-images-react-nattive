import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import ImageScreen from "./screens/ImageScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Homescreen" component={HomeScreen} />
        <Stack.Screen name="ImageScreen" component={ImageScreen} />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}
