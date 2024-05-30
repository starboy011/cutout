import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import GlobalSearch from "../GlobalSearch/GlobalSearch";
import Services from "../Services/Services";
import { ScrollView } from "react-native-gesture-handler";
import BarberShops from "../BarberShops/BarberShops";
const { width, height } = Dimensions.get("window");
const HomeBody = () => {
  return (
    <View style={styles.container}>
      <View style={styles.servicesContainer}>
        <Services />
      </View>
    </View>
  );
};

export default HomeBody;

const styles = StyleSheet.create({
  container: {
    width: width * 0.97,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  servicesContainer: {
    height: 125,
    width: width,
    justifyContent: "center",
  },
  barberShopsContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: width,
  },
});
