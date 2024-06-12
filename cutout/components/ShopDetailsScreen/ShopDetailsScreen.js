import { StyleSheet, ScrollView, Dimensions, View } from "react-native";
import React from "react";
import BackgroundImage from "./BackgroundImage";
import BookSlotNow from "./BookSlotNow";
import BasicInfo from "./BasicInfo";
import ServicesOffered from "./ServicesOffered";
import Prices from "./Prices";
import BusinessTimes from "./BusinessTimes";
const { width, height } = Dimensions.get("window");
const ShopDetailsScreen = () => {
  const Services = ["Haircut", "Shave", "Trim", "Hair Color", "Beard"];
  const ServicesPrices = ["120 Rs", "100 Rs", "80 Rs", "200 Rs", "50 Rs"];
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
        <View style={styles.timingsContainer}>
          <Prices Services={Services} ServicesPrices={ServicesPrices} />
        </View>
        <View style={styles.businessTimeContainer}>
          <BusinessTimes />
        </View>
        <View style={{ height: 100 }}></View>
      </ScrollView>
    </View>
  );
};

export default ShopDetailsScreen;

const styles = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: "white",
  },
  basicInfoContainer: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    height: 80,
  },
  servicesOfferedContainer: {
    justifyContent: "center",
    backgroundColor: "white",
  },
  timingsContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  businessTimeContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
