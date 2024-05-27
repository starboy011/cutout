import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
const { width, height } = Dimensions.get("window");
const HomeBody = () => {
  return <View style={styles.container}></View>;
};

export default HomeBody;

const styles = StyleSheet.create({
  container: {
    width: width * 0.98,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -20,
    height: 100,
    backgroundColor: "#f8f9fa",
  },
});
