import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import GlobalSearch from "../GlobalSearch/GlobalSearch";
import Services from "../Services/Services";
import { ScrollView } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");
const HomeBody = () => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.globalSearchContainer}>
        <GlobalSearch />
      </View> */}
      <View style={styles.servicesContainer}>
        <Services />
      </View>
    </View>
  );
};

export default HomeBody;

const styles = StyleSheet.create({
  container: {
    width: width * 0.98,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 30,
    marginTop: -20,
    backgroundColor: "white",
  },
  globalSearchContainer: {
    marginTop: 25,
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  servicesContainer: {
    height: 150,
    width: width,
    justifyContent: "center",
  },
});
