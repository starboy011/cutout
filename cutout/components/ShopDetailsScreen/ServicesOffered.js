import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { useFonts, Satisfy_400Regular } from "@expo-google-fonts/satisfy";
import { ActivityIndicator } from "react-native-paper";
const ServicesOffered = ({ Services }) => {
  let [fontsLoaded] = useFonts({
    Satisfy_400Regular,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <View>
      <View style={styles.ServicesOfferedContainer}>
        <Text style={styles.ServicesOfferedText}>Services offered</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Services.map((service, index) => (
          <View key={index} style={styles.circleContainer}>
            <View style={styles.circle}>
              <View style={styles.circleTextContainer}>
                <Text style={styles.circleText}>{service}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ServicesOffered;

const styles = StyleSheet.create({
  circleContainer: {
    width: 100,
    height: 110,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  circleTextContainer: {
    width: 80,
    height: 20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  circleText: {
    fontFamily: "serif",
    fontSize: 15,
    fontWeight: "bold",
  },
  ServicesOfferedContainer: {
    height: 50,
    justifyContent: "center",
  },
  ServicesOfferedText: {
    fontFamily: "Satisfy_400Regular",
    fontSize: 23,
    marginLeft: 15,
  },
});
