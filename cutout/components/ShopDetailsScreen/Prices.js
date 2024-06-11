import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFonts, Satisfy_400Regular } from "@expo-google-fonts/satisfy";
import { ActivityIndicator } from "react-native-paper";
const Prices = ({ ServicesPrices, Services }) => {
  let [fontsLoaded] = useFonts({
    Satisfy_400Regular,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Prices</Text>
      </View>
      <View style={styles.contentContainer}>
        {Services.map((service, index) => (
          <View style={styles.content}>
            <View>
              <Text style={styles.servicesText}>{service}</Text>
            </View>
            <View>
              <Text style={styles.PriceText}>{ServicesPrices[index]}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Prices;

const styles = StyleSheet.create({
  container: {
    width: "95%",
    backgroundColor: "#edf2fb",
    height: 250,
    borderRadius: 10,
    elevation: 5,
  },
  title: {
    height: 40,
    justifyContent: "center",
  },
  titleText: {
    fontFamily: "Satisfy_400Regular",
    fontSize: 23,
    marginLeft: 10,
  },
  contentContainer: {
    alignItems: "center",
  },
  content: {
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "grey",
    borderBottomWidth: 0.5,
    width: "95%",
  },
  servicesText: {
    fontFamily: "serif",
    fontSize: 20,
    marginLeft: 10,
  },
  PriceText: {
    fontFamily: "serif",
    fontSize: 15,
  },
});
