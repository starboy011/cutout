import { StyleSheet, Text, View, Dimensions, Animated } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { Drawer } from "react-native-paper";
const { width, height } = Dimensions.get("window");
const CustomeDrawer = () => {
  const [active, setActive] = useState("");
  const slideAnim = useRef(new Animated.Value(-300)).current;
  useEffect(() => {
    Animated.spring(slideAnim, {
      toValue: 0,
      friction: 8,
      tension: 20,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);
  return (
    <Animated.View style={{ transform: [{ translateX: slideAnim }] }}>
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
    </Animated.View>
  );
};

export default CustomeDrawer;

const styles = StyleSheet.create({
  container: {
    width: "75%",
    height: height * 0.8,
    backgroundColor: "white",
    borderRadius: 10,
    marginLeft: width * 0.015,
  },
});
