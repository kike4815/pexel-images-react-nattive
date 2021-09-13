import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { getImages } from "../api/pexel";
import ImageList from "../components/ImageList";
import { Input, Button } from "react-native-elements";

const HomeScreen = ({ openSearch }) => {
  const [photos, setPhotos] = useState([]);

  const loadImages = async () => {
    const res = await getImages();
    setPhotos(res.data.photos);
  };

  useEffect(() => {
    loadImages();
  }, []);

  return (
    <>
      {openSearch && (
        <View style={styles.searchSection}>
          <Input
            placeholder="Search a term"
            style={styles.searchInput}
            leftIcon={{ type: "feather", name: "search", color: "white" }}
          />
          <Button title="Search" />
        </View>
      )}
      <View style={styles.container}>
        <Text style={styles.totalResultText}>1000 results</Text>
        <ImageList photos={photos} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    alignItems: "center",
    justifyContent: "center",
  },
  totalResultText: {
    color: "#D0D0D0",
    textAlign: "right",
    width: "100%",
    paddingTop: 35,
  },
  searchSection: {
    backgroundColor: "#0D0D0D",
    width: "100%",
    paddingLeft: 10,
    flex: 1 / 4,
  },
  searchInput: {
    backgroundColor: "#2c292c",
    borderBottomWidth: 0,
    paddingHorizontal: 4,
  },
});

export default HomeScreen;
