import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";

const ServicesBox = (props) => {
  const { title, image } = props;
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.circle}>
        <View style={styles.title}>
          <Text style={styles.titleStyle}>{title}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ServicesBox;

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 200,
    justifyContent: "center",
    overflow: "hidden",
  },
  title: {
    width: 100,
    height: 20,
    backgroundColor: "#e9ecef",
    alignItems: "center",
    justifyContent: "center",
  },
  titleStyle: {
    fontWeight: "bold",
    fontFamily: "serif",
    fontSize: 16,
    marginTop: -1,
  },
});
