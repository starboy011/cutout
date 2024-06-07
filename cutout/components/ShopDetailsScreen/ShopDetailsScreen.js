import { StyleSheet, ScrollView, Dimensions } from "react-native";
import React from "react";
import BackgroundImage from "./BackgroundImage";
import BookSlotNow from "./BookSlotNow";
const { width, height } = Dimensions.get("window");
const ShopDetailsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <BackgroundImage />
      <BookSlotNow />
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
