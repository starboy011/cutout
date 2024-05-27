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
import SideDrawer from "../SideDrawer/SideDrawer";
import Profile from "../Profile/Profile";

const HomeHeader = () => {
  return (
    <ImageBackground source={headerBackground} style={styles.container}>
      <View style={styles.topbar}>
        <SideDrawer />
        <Profile />
      </View>
    </ImageBackground>
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
    alignItems: "center",
  },
  topbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: width,
    height: 50,
  },
});
