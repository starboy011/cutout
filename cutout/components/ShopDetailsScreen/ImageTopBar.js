import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const ImageTopBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome6 name={"arrow-left"} size={30} color={"white"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ImageTopBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
  },
  iconContainer: {
    width: 70,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
