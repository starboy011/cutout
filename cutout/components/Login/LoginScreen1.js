import {
  SafeAreaView,
  StyleSheet,
  Text,
  Platform,
  StatusBar,
  View,
  Dimensions,
} from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

const isTablet = width >= 600;

const LoginScreen1 = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.boxcontainer}>
          <View style={styles.box}></View>
          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen1;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    overflow: "hidden",
    backgroundColor: "#DFF5FF",
  },
  boxcontainer: {
    width: width,
    height: height * 0.2,
    // backgroundColor: "red",
  },
  box: {
    backgroundColor: "#1C1678",
    width: width * (isTablet ? 0.8 : 1),
    height: height * 0.5,
    flexDirection: "row",
    borderRadius: 1000,
    marginTop: isTablet ? -250 : -180,
    marginLeft: width * (isTablet ? -0.2 : -0.3),
  },
  box1: {
    backgroundColor: "#8576FF",
    width: width * (isTablet ? 0.8 : 1),
    height: height * 0.5,
    flexDirection: "row",
    borderRadius: 1000,
    marginTop: isTablet ? -500 : -430,
    marginLeft: width * (isTablet ? 0.5 : 0.55),
  },
  box2: {
    backgroundColor: "#67C6E3",
    width: width * (isTablet ? 0.8 : 0.5),
    height: height * 0.25,
    flexDirection: "row",
    borderRadius: 1000,
    marginTop: isTablet ? -250 : -300,
    marginLeft: width * (isTablet ? -0.2 : 0.2),
  },
});
