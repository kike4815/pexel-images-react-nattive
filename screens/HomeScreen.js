import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { getImages } from "../api/pexel";
import ImageList from "../components/ImageList";

const HomeScreen = () => {
  const [photos, setPhotos] = useState([]);

  const loadImages = async () => {
    const res = await getImages();
    setPhotos(res.data.photos);
  };

  useEffect(() => {
    loadImages();
  }, []);

  return (
    <View>
      <ImageList photos={photos} />
    </View>
  );
};

export default HomeScreen;
