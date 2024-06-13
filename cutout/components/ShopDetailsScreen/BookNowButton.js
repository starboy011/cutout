import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
const BookNowButton = () => {
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate("BookingScreen");
  };
  return (
    <TouchableOpacity onPress={handleLogin}>
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
