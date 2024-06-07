import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Dimensions,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import image from "../ShopDetailsScreen/image.png";
import ImageTopBar from "./ImageTopBar";
const { width, height } = Dimensions.get("window");
const BackgroundImage = () => {
  return (
    <View style={styles.imageContainer}>
      <ImageBackground source={image} style={styles.image}>
        <SafeAreaView>
          <ImageTopBar />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default BackgroundImage;

const styles = StyleSheet.create({
  imageContainer: {
    height: 500,
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  image: {
    width: width,
    height: "100%",
  },
});
