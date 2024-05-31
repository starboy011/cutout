import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
import React from "react";
const { width, height } = Dimensions.get("window");
const CardTile = ({ image, ShopName }) => {
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
    height: 130,
    marginBottom: 5,
    backgroundColor: "green",
  },
  shopNameContainer: {
    backgroundColor: "red",
    height: 40,
  },
  shopNameText: {
    fontSize: 20,
    fontFamily: "serif",
    fontWeight: "bold",
  },
});
