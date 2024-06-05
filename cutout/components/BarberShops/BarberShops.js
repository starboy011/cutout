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
        Address={"456 MG Road Bengaluru"}
        Status={"OPEN"}
        Distance={"1.2 km"}
        StatusColor={"rgba(64, 165, 120, 0.8)"}
        MetaMessage={"Hurry, only 3 slots left for the day"}
        ActiveOffer={true}
        HairCutPrice={"150 ₹"}
        OfferPercentage={"20% OFF"}
        OfferedHairCutPrice={"120 ₹"}
      />
      <CardTile
        image={Shop1Image}
        ShopName={"The Hair Haven"}
        RatingInStarts={4.5}
        Address={"456 MG Road Bengaluru"}
        Status={"OPEN"}
        Distance={"1.2 km"}
        StatusColor={"rgba(64, 165, 120, 0.8)"}
        MetaMessage={"Hurry, only 3 slots left for the day"}
        ActiveOffer={true}
        HairCutPrice={"150 ₹"}
        OfferPercentage={"20% OFF"}
        OfferedHairCutPrice={"120 ₹"}
      />
      <CardTile
        image={Shop1Image}
        ShopName={"The Hair Haven"}
        RatingInStarts={4.5}
        Address={"456 MG Road Bengaluru"}
        Status={"CLOSED"}
        Distance={"1.2 km"}
        StatusColor={"tomato"}
        MetaMessage={"Hurry, only 3 slots left for the day"}
        ActiveOffer={false}
        HairCutPrice={"150 ₹"}
        OfferPercentage={"20% OFF"}
        OfferedHairCutPrice={"120 ₹"}
      />
      <CardTile
        image={Shop1Image}
        ShopName={"The Hair Haven"}
        RatingInStarts={4.5}
        Address={"456 MG Road Bengaluru"}
        Status={"OPEN"}
        Distance={"1.2 km"}
        StatusColor={"rgba(64, 165, 120, 0.8)"}
        MetaMessage={"Hurry, only 3 slots left for the day"}
        ActiveOffer={true}
        HairCutPrice={"150 ₹"}
        OfferPercentage={"20%  OFF"}
        OfferedHairCutPrice={"120 ₹"}
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
    width: "100%",
  },
});
