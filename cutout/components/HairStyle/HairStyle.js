import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GlobalSearch from "../GlobalSearch/GlobalSearch";
const { width, height } = Dimensions.get("window");
const HairStyle = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.globalSearchContainer}>
          <GlobalSearch />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HairStyle;

const styles = StyleSheet.create({
  container: {
    width: width * 0.98,
    backgroundColor: "white",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  globalSearchContainer: {
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
});
