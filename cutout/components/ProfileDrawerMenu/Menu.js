import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Menu = (prop) => {
  const Name = prop.name;
  return (
    <View style={styles.container}>
      <Text style={styles.TextStyle}>{Name}</Text>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  TextStyle: {
    fontFamily: "serif",
    fontSize: 30,
  },
});
