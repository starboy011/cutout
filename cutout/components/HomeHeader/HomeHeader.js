import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

import headerBackground from "./headerBackground.jpeg";

const HomeHeader = () => {
  return (
    <ImageBackground
      source={headerBackground}
      style={styles.container}
    ></ImageBackground>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    width: width * 0.98,
    height: 250,
    borderTopEndRadius: 10,
    borderTopLeftRadius: 10,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.8,
  },
});
