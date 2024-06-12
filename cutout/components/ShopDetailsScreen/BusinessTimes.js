import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFonts, Satisfy_400Regular } from "@expo-google-fonts/satisfy";
import { ActivityIndicator } from "react-native-paper";
const BusinessTimes = () => {
  let [fontsLoaded] = useFonts({
    Satisfy_400Regular,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>Business hours</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.businessHoursContainer}>
          <View style={styles.businessDays}>
            <Text style={styles.businessDaysText}>Monday - Friday :</Text>
          </View>
          <View style={styles.businessTimes}>
            <Text style={styles.businessTimesText}>9:00 AM - 6:00 PM</Text>
          </View>
        </View>
        <View style={styles.businessHoursContainer}>
          <View style={styles.businessDays}>
            <Text style={styles.businessDaysText}>Saturday :</Text>
          </View>
          <View style={styles.businessTimes}>
            <Text style={styles.businessTimesText}>Closed</Text>
          </View>
        </View>
        <View style={styles.businessHoursContainer}>
          <View style={styles.businessDays}>
            <Text style={styles.businessDaysText}>Sunday :</Text>
          </View>
          <View style={styles.businessTimes}>
            <Text style={styles.businessTimesText}>8:00 AM - 6:00 PM</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BusinessTimes;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    width: "100%",
  },
  titleText: {
    fontSize: 23,
    marginLeft: 20,
    marginTop: 10,
    fontFamily: "Satisfy_400Regular",
  },
  contentContainer: {
    width: "95%",
  },
  businessHoursContainer: {
    width: "100%",
    height: 30,
    flexDirection: "row",
  },
  businessDays: {
    width: "60%",
    justifyContent: "center",
  },
  businessDaysText: {
    fontSize: 15,
    fontFamily: "serif",
    fontWeight: "bold",
    marginLeft: 10,
  },
  businessTimes: {
    width: "40%",
    justifyContent: "center",
  },
  businessTimesText: {
    fontSize: 15,
    fontFamily: "serif",
  },
});
