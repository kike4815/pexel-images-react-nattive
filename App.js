import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, Image, StyleSheet } from "react-native";
import Pexel from "./assets/pexel.png";

import HomeScreen from "./screens/HomeScreen";
import ImageScreen from "./screens/ImageScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Homescreen"
          options={{
            headerLeft: () => <Image source={Pexel} style={styles.logo} />,
            title: "Pexels App",
            headerTintColor: "#fff",
            headerStyle: {
              backgroundColor: "#0D0D0D",
            },
            headerRight: () => (
              <Text
                style={{ color: "white", fontSize: 18 }}
                onPress={() => setOpenSearch(!openSearch)}
              >
                {openSearch ? "Close" : "Search"}
              </Text>
            ),
          }}
        >
          {(props) => <HomeScreen {...props} openSearch={openSearch} />}
        </Stack.Screen>
        <Stack.Screen name="ImageScreen" component={ImageScreen} />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 37,
    height: 37,
    marginEnd: 9,
    borderRadius: 5,
  },
});
