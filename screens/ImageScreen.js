import React from "react";
import { View, Image } from "react-native";

export default function ImageScreen({ route }) {
  const { image } = route.params;
  return (
    <View>
      <Image source={{ uri: image.src.medium, height: 350 }} />
    </View>
  );
}
