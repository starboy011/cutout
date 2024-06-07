import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons for star icons
import { useFonts, Satisfy_400Regular } from "@expo-google-fonts/satisfy";
const Rating = ({ rating }) => {
  const filledStars = Math.floor(rating); // Number of filled stars
  const hasHalfStar = rating - filledStars >= 0.5; // Check if there's a half-filled star

  // Array to render empty and filled stars
  const stars = Array.from({ length: 5 }, (_, index) => {
    if (index < filledStars) {
      return (
        <Ionicons
          key={index}
          name="star"
          size={10}
          color="#ffc107" // Filled star color
          style={{ marginRight: 1 }}
        />
      );
    } else if (index === filledStars && hasHalfStar) {
      return (
        <Ionicons
          key={index}
          name="star-half"
          size={10}
          color="#ffc107" // Filled star color
          style={{ marginRight: 5 }}
        />
      );
    } else {
      return (
        <Ionicons
          key={index}
          name="star-outline"
          size={10}
          color="#ffc107"
          style={{ marginRight: 5 }}
        />
      );
    }
  });
  let [fontsLoaded] = useFonts({
    Satisfy_400Regular,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  return (
    <View style={{ flexDirection: "column" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: 55,
        }}
      >
        {stars}
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View></View>
        <View>
          <Text style={styles.RatingTextStyle}>{rating}/5</Text>
        </View>
      </View>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  RatingTextStyle: {
    fontSize: 12,
    fontFamily: "Satisfy_400Regular",
  },
});
