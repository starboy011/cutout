import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Avatar } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

const SideDrawer = () => {
  const [active, setActive] = useState(false);

  return (
    <View style={styles.container}>
      {!active ? (
        <TouchableOpacity onPress={() => setActive(!active)}>
          <Avatar.Icon
            size={50}
            color="white"
            style={{ backgroundColor: "transparent" }}
            icon="menu"
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => setActive(!active)}>
          <Avatar.Icon
            size={50}
            color="white"
            style={{ backgroundColor: "transparent" }}
            icon="close"
          />
        </TouchableOpacity>
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
});
