import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BasicInfoAddressBar = ({ Address }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.addressText}>{Address}</Text>
    </View>
  );
};

export default BasicInfoAddressBar;

const styles = StyleSheet.create({
  container: {
    height: 30,
    justifyContent: "center",
  },
  addressText: {
    fontFamily: "serif",
    marginLeft: 30,
    letterSpacing: 1,
  },
});
