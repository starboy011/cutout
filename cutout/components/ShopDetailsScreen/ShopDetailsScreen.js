import { StyleSheet, ScrollView, Dimensions, View } from "react-native";
import React from "react";
import BackgroundImage from "./BackgroundImage";
import BookSlotNow from "./BookSlotNow";
import BasicInfo from "./BasicInfo";
import ServicesOffered from "./ServicesOffered";
const { width, height } = Dimensions.get("window");
const ShopDetailsScreen = () => {
  const Services = ["Haircut", "Shave", "Trim", "Hair Color", "Beard"];
  return (
    <View style={styles.container}>
      <ScrollView>
        <BackgroundImage />
        <BookSlotNow />
        <View style={styles.basicInfoContainer}>
          <BasicInfo
            ShopName={"The Hair Heven"}
            Rating={"4.5/5"}
            Address={"456 MG Road Bengaluru"}
          />
        </View>
        <View style={styles.servicesOfferedContainer}>
          <ServicesOffered Services={Services} />
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
  servicesOfferedContainer: {
    justifyContent: "center",
  },
});
