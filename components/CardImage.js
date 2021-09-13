import React from "react";
import { View, Image, StyleSheet } from "react-native";

const CardImage = ({ image }) => {
  console.log(image);
  return (
    <View style={styles.cardImage}>
      <Image
        source={{
          uri: image.src.small
            ? image.src.small
            : "https://cdn.iconscout.com/icon/free/png-512/no-image-1771002-1505134.png",
        }}
        style={{ height: 180, width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardImage: {
    display: "flex",
    width: "49.5%",
    borderWidth: 0,
    borderRadius: 5,
    backgroundColor: "#2c292c",
    justifyContent: "space-between",
    margin: 2,
  },
});

export default CardImage;
