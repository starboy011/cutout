import { StyleSheet, View, Dimensions } from "react-native";
import React, { useState } from "react";
import { Avatar, Portal } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomeDrawer from "../Drawer/CustomeDrawer";
const { width, height } = Dimensions.get("window");
const SideDrawer = () => {
  const [active, setActive] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setActive(!active)}>
        <Avatar.Icon
          size={50}
          color="white"
          style={{ backgroundColor: "transparent" }}
          icon={active ? "close" : "menu"}
        />
      </TouchableOpacity>
      {active && (
        <Portal>
          <View style={styles.overlay}>
            <CustomeDrawer />
          </View>
        </Portal>
      )}
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
  overlay: {
    position: "absolute",
    top: 100,
    zIndex: 999,
    width: width,
    height: height,
  },
});
