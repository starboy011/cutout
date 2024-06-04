import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ImageTopBar = ({ Status }) => {
  return (
    <View style={styles.container}>
      <View style={styles.statusContainer}>
        <View style={styles.status}>
          <Text style={styles.statusText}>{Status}</Text>
        </View>
      </View>
      <View style={styles.statusContainer}></View>
    </View>
  );
};

export default ImageTopBar;

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
    justifyContent: "center",
    alignItems: "center",
  },
  distanceContainer: {
    width: 80,
    height: "100%",
  },
  status: {
    width: "80%",
    backgroundColor: "rgba(64, 165, 120,0.8)",
    height: "60%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  statusText: {
    fontSize: 18,
    fontFamily: "serif",
    fontWeight: "500",
    color: "white",
    letterSpacing: 1.5,
  },
});
