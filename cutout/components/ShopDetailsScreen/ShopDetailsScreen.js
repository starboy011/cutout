import { StyleSheet, ScrollView, Dimensions, View } from "react-native";
import React from "react";
import BackgroundImage from "./BackgroundImage";
import BookSlotNow from "./BookSlotNow";
import BasicInfo from "./BasicInfo";
const { width, height } = Dimensions.get("window");
const ShopDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <BackgroundImage />
        <BookSlotNow />
        <View style={styles.basicInfoContainer}>
          <BasicInfo ShopName={"The Hair Heven"} Rating={"4.5/5"} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ShopDetailsScreen;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  basicInfoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
