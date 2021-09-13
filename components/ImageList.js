import React from "react";
import { View, Text, FlatList } from "react-native";
import CardImage from "../components/CardImage";

export default function ImageList({ photos }) {
  const renderItem = ({ item }) => <CardImage image={item} />;

  return (
    <View>
      <FlatList
        data={photos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
}
