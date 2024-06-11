import { StyleSheet, View, Dimensions } from "react-native";
import React from "react";
import { useFonts, Satisfy_400Regular } from "@expo-google-fonts/satisfy";
import { ActivityIndicator } from "react-native-paper";
import BasicInfoTopBar from "./BasicInfoTopBar";
import BasicInfoAddressBar from "./BasicInfoAddressBar";
const { width, height } = Dimensions.get("window");
const BasicInfo = ({ ShopName, Rating, Address }) => {
  let [fontsLoaded] = useFonts({
    Satisfy_400Regular,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.container}>
      <BasicInfoTopBar ShopName={ShopName} Rating={Rating} />
      <BasicInfoAddressBar Address={Address} />
    </View>
  );
};

export default BasicInfo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#edf2fb",
    width: width * 0.97,
    height: 70,
    borderRadius: 10,
    elevation: 5,
  },
});
