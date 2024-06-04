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
import { EmilysCandy_400Regular } from "@expo-google-fonts/emilys-candy";
import Rating from "./Rating";
import ImageTopBar from "./ImageTopBar";
import ImageBottomBar from "./ImageBottomBar";

const { width, height } = Dimensions.get("window");
const CardTile = ({
  image,
  ShopName,
  RatingInStarts,
  Address,
  Status,
  Distance,
}) => {
  let [fontsLoaded] = useFonts({
    Satisfy_400Regular,
    EmilysCandy_400Regular,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.imageContainer}>
        <View style={styles.imageTopBar}>
          <ImageTopBar Status={Status} Distance={Distance} />
        </View>
        <View style={styles.imageBottomBar}>
          <ImageBottomBar />
        </View>
      </ImageBackground>
      <View style={styles.detailsContainer}>
        <View style={styles.detailsTitleContainer}>
          <View style={styles.shopNameContainer}>
            <Text style={styles.shopNameText}>{ShopName}</Text>
          </View>
          <View style={styles.ratingContainer}>
            <Rating rating={RatingInStarts} />
          </View>
        </View>
        <View style={styles.detailsContentContainer}>
          <View style={styles.shopNameContainer}>
            <Text style={styles.shopAddressText}>{Address}</Text>
          </View>
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
    backgroundColor: "#EEF5FF",
  },
  imageContainer: {
    marginTop: 5,
    width: width * 0.9,
    height: 200,
    borderColor: "#ced4da",
    borderTopStartRadius: 5,
    borderTopEndRadius: 5,
    overflow: "hidden",
    justifyContent: "space-between",
  },
  detailsContainer: {
    width: width * 0.9,
    height: 140,
  },
  detailsTitleContainer: {
    width: width * 0.9,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailsContentContainer: {
    width: width * 0.9,
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
  shopAddressText: {
    fontSize: 15,
    fontFamily: "EmilysCandy_400Regular",
    marginLeft: 10,
  },
  ratingContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },
  imageTopBar: {
    width: width * 0.9,
    height: 50,
  },
  imageBottomBar: {
    width: width * 0.9,
    height: 50,
  },
});
