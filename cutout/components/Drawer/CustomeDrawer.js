import { StyleSheet, Text, View, Dimensions, Animated } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { Drawer, Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");
const CustomeDrawer = () => {
  const [active, setActive] = useState("");
  const slideAnim = useRef(new Animated.Value(-300)).current;
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate("Home");
  };
  useEffect(() => {
    Animated.spring(slideAnim, {
      toValue: 0,
      friction: 8,
      tension: 20,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);
  return (
    <View style={{ backgroundColor: "white" }}>
      <Appbar.Header elevated>
        <Appbar.BackAction onPress={handleLogin} />
        <Appbar.Content title="Menu" />
        {/* <Appbar.Action icon="magnify" onPress={() => {}} /> */}
      </Appbar.Header>
      <Animated.View style={{ transform: [{ translateX: slideAnim }] }}>
        <View style={styles.container}>
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
        </View>
      </Animated.View>
    </View>
  );
};

export default CustomeDrawer;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
});
