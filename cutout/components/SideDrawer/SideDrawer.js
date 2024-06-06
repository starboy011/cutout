import { StyleSheet, View, Dimensions } from "react-native";
import React, { useState } from "react";
import { Avatar } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");
const SideDrawer = () => {
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate("CustomeDrawer");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLogin}>
        <Avatar.Icon
          size={50}
          color="white"
          style={{ backgroundColor: "transparent" }}
          icon={"menu"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SideDrawer;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
});
