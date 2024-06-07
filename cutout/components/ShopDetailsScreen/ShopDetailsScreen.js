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
import BackgroundImage from "./BackgroundImage";
const { width, height } = Dimensions.get("window");
const ShopDetailsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <BackgroundImage />
    </ScrollView>
  );
};

export default ShopDetailsScreen;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
});
