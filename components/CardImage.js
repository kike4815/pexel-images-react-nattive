import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CardImage = ({ image }) => {
  const navigatation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.cardImage}
      onPress={() => navigatation.navigate("ImageScreen", { image })}
    >
      <Image
        source={{
          uri: image.src.portrait
            ? image.src.portrait
            : "https://cdn.iconscout.com/icon/free/png-512/no-image-1771002-1505134.png",
        }}
        style={{ height: 180, width: "100%" }}
      />
    </TouchableOpacity>
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
