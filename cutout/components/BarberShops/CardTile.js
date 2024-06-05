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
import MetaMessages from "./MetaMessages";

const { width, height } = Dimensions.get("window");
const CardTile = ({
  image,
  ShopName,
  RatingInStarts,
  Address,
  Status,
  Distance,
  StatusColor,
  MetaMessage,
  ActiveOffer,
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
          <ImageTopBar
            Status={Status}
            Distance={Distance}
            StatusColor={StatusColor}
          />
        </View>
        <View style={styles.imageBottomBar}>
          <ImageBottomBar ActiveOffer={ActiveOffer} />
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
          <View style={styles.shopPriceContainer}>
            <MetaMessages MetaMessage={MetaMessage} />
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
    borderColor: "#ced4da",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "#EEF5FF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Shadow for Android
    elevation: 3,
  },
  imageContainer: {
    width: width * 0.95,
    height: 225,
    borderColor: "#ced4da",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    overflow: "hidden",
    justifyContent: "space-between",
  },
  detailsContainer: {
    width: width * 0.9,
  },
  detailsTitleContainer: {
    width: width * 0.9,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailsContentContainer: {
    width: width * 1,
    justifyContent: "space-between",
  },
  shopNameContainer: {
    justifyContent: "center",
    height: 35,
  },
  shopPriceContainer: {
    justifyContent: "center",
    width: width * 1,
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
    width: "100%",
    height: 50,
  },
  imageBottomBar: {
    width: "100%",
    height: 50,
  },
});
