import { StyleSheet, Text, View } from "react-native";
import React from "react";

const DiscountedPrice = ({
  HairCutPrice,
  OfferPercentage,
  OfferedHairCutPrice,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.discountContainer}>
        <Text style={styles.strikeThroughPrice}>{HairCutPrice}</Text>
        <Text style={styles.discountText}>{OfferPercentage}</Text>
      </View>
      <View>
        <Text style={styles.priceContainer}>{OfferedHairCutPrice}</Text>
      </View>
    </View>
  );
};

export default DiscountedPrice;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
  },
  priceContainer: {
    width: 70,
    height: 30,
    borderRadius: 20,
    backgroundColor: "black",
    marginHorizontal: 10,
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
    elevation: 5,
  },

  price: {
    fontSize: 20,
  },
  discountContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  strikeThroughPrice: {
    fontSize: 16,
    marginHorizontal: 10,
    textDecorationLine: "line-through",
    color: "grey",
  },
  discountText: {
    fontSize: 14,
    color: "green",
    marginLeft: 5,
  },
});
