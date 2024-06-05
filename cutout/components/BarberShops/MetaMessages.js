import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");
const MetaMessages = ({ MetaMessage }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialIcons name={"bolt"} size={20} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{MetaMessage}</Text>
      </View>
    </View>
  );
};

export default MetaMessages;

const styles = StyleSheet.create({
  container: { flexDirection: "row" },
  textContainer: {
    justifyContent: "center",
  },
  text: {
    fontSize: 15,
    color: "grey",
  },
  iconContainer: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
