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
import HomeContent from "../HomeContent/HomeContent";
import Title from "../Title/Title";
const HomeHeader = () => {
  return (
    <ImageBackground source={headerBackground} style={styles.container}>
      <View style={styles.topbar}>
        <SideDrawer />
        <Title />
        <Profile />
      </View>
      <View style={styles.content}>
        <HomeContent />
      </View>
    </ImageBackground>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    width: width * 0.97,
    height: 200,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    overflow: "hidden",
    alignItems: "center",
  },
  topbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: width,
    height: 50,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    width: width,
    height: "80%",
  },
});
