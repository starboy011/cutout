import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import GlobalSearch from "../GlobalSearch/GlobalSearch";
const { width, height } = Dimensions.get("window");
const HomeBody = () => {
  return (
    <View style={styles.container}>
      <View style={styles.globalSearchContainer}>
        <GlobalSearch />
      </View>
    </View>
  );
};

export default HomeBody;

const styles = StyleSheet.create({
  container: {
    width: width * 0.98,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -20,
    backgroundColor: "#f8f9fa",
  },
  globalSearchContainer: {
    marginTop: 20,
    width: width,
    height: 80,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});
