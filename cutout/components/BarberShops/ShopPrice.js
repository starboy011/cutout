import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useFonts, Satisfy_400Regular } from "@expo-google-fonts/satisfy";
import { ActivityIndicator } from "react-native-paper";
import { EmilysCandy_400Regular } from "@expo-google-fonts/emilys-candy";
import { useNavigation } from "@react-navigation/native";
const DiscountedPrice = ({
  HairCutPrice,
  OfferPercentage,
  OfferedHairCutPrice,
}) => {
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate("BookingScreen");
  };
  let [fontsLoaded] = useFonts({
    Satisfy_400Regular,
    EmilysCandy_400Regular,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={styles.discountContainer}>
          <Text style={styles.strikeThroughPrice}>{HairCutPrice}</Text>
          <Text style={styles.discountText}>{OfferPercentage}</Text>
        </View>
        <View>
          <Text style={styles.priceContainer}>{OfferedHairCutPrice}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={handleLogin}>
        <View style={styles.book}>
          <Text style={styles.bookText}>PLAN NOW</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DiscountedPrice;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    height: 80,
    justifyContent: "space-between",
    width: 350,
  },
  book: {
    backgroundColor: "#ff0000",
    elevation: 5,
    width: 100,
    height: 30,
    elevation: 5,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  bookText: {
    color: "white",
    fontFamily: "EmilysCandy_400Regular",
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
