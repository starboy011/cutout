import { StyleSheet, Text, View, StatusBar, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import HomeHeader from "../HomeHeader/HomeHeader";
import { ScrollView } from "react-native-gesture-handler";
import HomeBody from "../HomeBody/HomeBody";

const { width, height } = Dimensions.get("window");
const Home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView stickyHeaderIndices={[1]}>
          <View style={styles.headerContainer}>
            <HomeHeader />
          </View>
          <View style={styles.homeBodyContainer}>
            <HomeBody />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  container: {
    flex: 1,
  },
  headerContainer: {
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  homeBodyContainer: {
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
});
