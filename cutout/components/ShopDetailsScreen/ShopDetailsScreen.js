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
const { width, height } = Dimensions.get("window");
const ShopDetailsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground source={image} style={styles.image}>
          <SafeAreaView></SafeAreaView>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

export default ShopDetailsScreen;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
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
