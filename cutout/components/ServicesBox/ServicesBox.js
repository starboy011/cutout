import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const ServicesBox = (props) => {
  const { title, image } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <ImageBackground source={image} style={styles.circle}>
          <View style={styles.title}>
            <Text style={styles.titleStyle}>{title}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
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
    backgroundColor: "#f8f9fa",
  },
  titleStyle: {
    fontWeight: "bold",
    fontFamily: "serif",
    fontSize: 16,
    marginTop: -1,
  },
});
