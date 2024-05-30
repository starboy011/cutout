import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CardTile from "./CardTile";
import Shop1Image from "./Shop1Image.jpeg";
const BarberShops = () => {
  return (
    <View style={styles.container}>
      <CardTile image={Shop1Image} />
      <CardTile image={Shop1Image} />
      <CardTile image={Shop1Image} />
      <CardTile image={Shop1Image} />
    </View>
  );
};

export default BarberShops;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
