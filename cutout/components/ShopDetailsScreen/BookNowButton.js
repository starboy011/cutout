import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "react-native-paper";
const BookNowButton = () => {
  return (
    <TouchableOpacity>
      <Button
        icon="book"
        mode="contained"
        onPress={() => console.log("Pressed")}
        style={styles.button}
      >
        BOOK NOW
      </Button>
    </TouchableOpacity>
  );
};

export default BookNowButton;

const styles = StyleSheet.create({
  button: {
    width: 300,
  },
});
