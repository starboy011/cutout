import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useFonts, Satisfy_400Regular } from "@expo-google-fonts/satisfy";
import { ActivityIndicator } from "react-native-paper";
const { width, height } = Dimensions.get("window");
const BasicInfo = ({ ShopName, Rating }) => {
  let [fontsLoaded] = useFonts({
    Satisfy_400Regular,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.basicInfoTopBar}>
        <View style={styles.shopName}>
          <Text style={styles.shopNameText}>{ShopName}</Text>
        </View>
        <View style={styles.rating}>
          <View style={styles.ratingText}>
            <Text style={styles.ratingTextStyle}>{Rating}</Text>
          </View>
          <View style={styles.ratingIcon}>
            <Ionicons name={"star-half-sharp"} size={25} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default BasicInfo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e2eafc",
    width: width * 0.97,
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  basicInfoTopBar: {
    height: "25%",
    flexDirection: "row",
  },
  shopName: {
    height: "100%",
    width: "70%",
    justifyContent: "center",
  },
  shopNameText: {
    fontSize: 23,
    marginLeft: 10,
    fontFamily: "Satisfy_400Regular",
    fontWeight: "700",
  },
  rating: {
    height: "100%",
    width: "30%",
    flexDirection: "row",
  },
  ratingIcon: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  ratingText: {
    width: "50%",
    height: "100%",
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  ratingTextStyle: {
    marginTop: 6,
    fontFamily: "Satisfy_400Regular",
    fontSize: 20,
  },
});
