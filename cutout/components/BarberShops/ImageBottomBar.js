import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ImageBottomBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.statusContainer}></View>
      <View style={styles.statusContainer}></View>
    </View>
  );
};

export default ImageBottomBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statusContainer: {
    width: 80,
    height: "100%",
  },
  distanceContainer: {
    width: 80,
    height: "100%",
  },
});
