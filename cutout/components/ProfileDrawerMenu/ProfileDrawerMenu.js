import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Menu from "./Menu";

const ProfileDrawerMenu = () => {
  return (
    <View style={styles.container}>
      <Menu name={"Rishav"} />
    </View>
  );
};

export default ProfileDrawerMenu;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
