import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");

const BookSlotNow = () => {
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate("BookingScreen");
  };
  return (
    <View style={styles.conatainer}>
      <View style={styles.bookNowContainer}>
        <View style={styles.bookNow}>
          <TouchableOpacity onPress={handleLogin}>
            <MaterialCommunityIcons name={"calendar-check"} size={40} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BookSlotNow;

const styles = StyleSheet.create({
  conatainer: {
    width: width,
    height: 25,
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: "white",
  },
  bookNowContainer: {
    width: "40%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  bookNow: {
    marginTop: -60,
    width: "35%",
    height: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    borderRadius: 5,
    alignItems: "center",
  },
});
