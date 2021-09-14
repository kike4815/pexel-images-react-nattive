import React from "react";
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import { Button } from "react-native-elements";
import * as WebBrowser from "expo-web-browser";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";

function ImageScreen({ route }) {
  const { image } = route.params;

  const handlePress = async () => {
    await WebBrowser.openBrowserAsync(image.photographer_url);
  };

  const downloadFlie = async () => {
    let fileUri = FileSystem.documentDirectory + image.id + ".jpeg";
    try {
      const { uri } = FileSystem.downloadAsync(image.src.large2x, fileUri);
      saveFile(uri);
    } catch (error) {
      console.log(error);
    }
  };

  const saveFile = async (fileUri) => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status === "granted") {
      const asset = await MediaLibrary.createAssetAsync(fileUri);
      await MediaLibrary.createAlbumAsync("Download", asset, false);
    }
  };

  const handleDownload = () => {
    downloadFlie();
  };

  return (
    <View style={styles.headerPhotographer}>
      <Image source={{ uri: image.src.medium, height: 350 }} />
      <View
        style={{
          display: "flex",
          paddingVertical: 18,
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Avatar
            title={image.photographer
              .split(" ")
              .map((string) => string[0])
              .join("")
              .toUpperCase()}
            containerStyle={{ backgroundColor: "red" }}
            rounded
          />
          <TouchableOpacity onPress={() => handlePress()}>
            <Text style={styles.textPhotographer}>{image.photographer}</Text>
          </TouchableOpacity>
        </View>
        <Button
          title="Download"
          buttonStyle={{ backgroundColor: "#229783" }}
          onPress={() => handleDownload()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerPhotographer: {
    backgroundColor: "#0D0D0D",
    flex: 1,
    flexDirection: "column",
    padding: 10,
  },
  textPhotographer: {
    color: "#fff",
    fontWeight: "bold",
    marginStart: 5,
    fontSize: 18,
  },
});

export default ImageScreen;
