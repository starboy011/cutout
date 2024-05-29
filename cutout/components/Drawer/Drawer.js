import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Drawer } from "react-native-paper";
const { width, height } = Dimensions.get("window");
const Drawer = () => {
  const [active, setActive] = useState("");

  return (
    <SafeAreaView>
      <Drawer.Section title="Menu" style={styles.container}>
        <Drawer.Item
          label="First Item"
          active={active === "first"}
          onPress={() => setActive("first")}
        />
        <Drawer.Item
          label="Second Item"
          active={active === "second"}
          onPress={() => setActive("second")}
        />
      </Drawer.Section>
    </SafeAreaView>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  container: {
    width: "75%",
    height: height,
    backgroundColor: "grey",
  },
});
