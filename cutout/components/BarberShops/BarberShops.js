import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CardTile from "./CardTile";
import Shop1Image from "./Shop1Image.jpeg";
const BarberShops = () => {
  return (
    <View style={styles.container}>
      <CardTile
        image={Shop1Image}
        ShopName={"The Hair Haven"}
        RatingInStarts={4.5}
      />
      <CardTile
        image={Shop1Image}
        ShopName={"The Hair Haven"}
        RatingInStarts={4.5}
      />
      <CardTile
        image={Shop1Image}
        ShopName={"The Hair Haven"}
        RatingInStarts={4.5}
      />
      <CardTile
        image={Shop1Image}
        ShopName={"The Hair Haven"}
        RatingInStarts={4.5}
      />
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
