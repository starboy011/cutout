import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import image1 from "/Users/starboy/Repos/cutout/cutout/components/ShopDetailsScreen/image1.png";
import image2 from "/Users/starboy/Repos/cutout/cutout/components/ShopDetailsScreen/image2.png";
import image3 from "/Users/starboy/Repos/cutout/cutout/components/ShopDetailsScreen/image3.png";
const { width, height } = Dimensions.get("window");
const ShopImages = () => {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <ImageBackground source={image1} style={styles.image}></ImageBackground>
      <ImageBackground source={image2} style={styles.image}></ImageBackground>
      <ImageBackground source={image3} style={styles.image}></ImageBackground>
    </ScrollView>
  );
};

export default ShopImages;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    overflow: "hidden",
    flexDirection: "row",
  },
  image: {
    width: width * 0.9,
    height: "100%",
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 10,
  },
});
