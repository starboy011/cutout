import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
import React from "react";
const { width, height } = Dimensions.get("window");
const CardTile = ({ image }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        style={styles.imageContainer}
      ></ImageBackground>
      <View style={styles.detailsContainer}></View>
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
    borderRadius: 10,
    borderColor: "#ced4da",
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
    borderColor: "grey",
    borderRadius: 10,
    marginBottom: 5,
    flexDirection: "row",
    borderWidth: 1,
  },
});
