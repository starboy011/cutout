import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");

const BookSlotNow = () => {
  return (
    <View style={styles.conatainer}>
      <View style={styles.bookNowContainer}>
        <View style={styles.bookNow}>
          <TouchableOpacity>
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
    height: 60,
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: "white",
  },
  bookNowContainer: {
    width: "50%",

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
