import { StyleSheet, Text, View, Animated } from "react-native";
import React, { useRef, useEffect } from "react";

const Title = () => {
  const slideAnim = useRef(new Animated.Value(300)).current;
  useEffect(() => {
    Animated.spring(slideAnim, {
      toValue: 0,
      friction: 5,
      tension: 150,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);
  return (
    <Animated.View
      style={[styles.container, { transform: [{ translateY: slideAnim }] }]}
    >
      <Text style={styles.titleText}>CUTOUTS</Text>
    </Animated.View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "white",
    fontSize: 40,
  },
});
