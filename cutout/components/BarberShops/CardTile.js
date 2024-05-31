import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { useFonts, Satisfy_400Regular } from "@expo-google-fonts/satisfy";
import Rating from "./Rating";

const { width, height } = Dimensions.get("window");
const CardTile = ({ image, ShopName }) => {
  let [fontsLoaded] = useFonts({
    Satisfy_400Regular,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        style={styles.imageContainer}
      ></ImageBackground>
      <View style={styles.detailsContainer}>
        <View style={styles.shopNameContainer}>
          <Text style={styles.shopNameText}>{ShopName}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Rating rating={4.5} />
        </View>
      </View>
    </View>
  );
};

export default CardTile;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
    width: width * 0.96,
    height: 350,
    borderColor: "#ced4da",
    backgroundColor: "#fff0f3",
  },
  imageContainer: {
    marginTop: 5,
    width: width * 0.9,
    height: 200,
    borderColor: "#ced4da",
    borderTopStartRadius: 5,
    borderTopEndRadius: 5,
    overflow: "hidden",
  },
  detailsContainer: {
    width: width * 0.9,
    height: 140,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  shopNameContainer: {
    justifyContent: "center",
    height: 40,
  },
  shopNameText: {
    fontSize: 25,
    fontFamily: "Satisfy_400Regular",
    marginLeft: 10,
  },
  ratingContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    // width: 100,
  },
});
