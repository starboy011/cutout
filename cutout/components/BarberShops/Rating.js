import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons for star icons

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
          size={14}
          color="#ffc107" // Filled star color
          style={{ marginRight: 1 }}
        />
      );
    } else if (index === filledStars && hasHalfStar) {
      return (
        <Ionicons
          key={index}
          name="star-half"
          size={14}
          color="#ffc107" // Filled star color
          style={{ marginRight: 5 }}
        />
      );
    } else {
      return (
        <Ionicons
          key={index}
          name="star-outline"
          size={14}
          color="#ffc107" // Empty star color
          style={{ marginRight: 5 }}
        />
      );
    }
  });

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>{stars}</View>
  );
};

export default Rating;
