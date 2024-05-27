import { StyleSheet, View, Animated } from "react-native";
import React, { useRef, useEffect } from "react";

const HomeContent = () => {
  const slideAnim = useRef(new Animated.Value(300)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(slideAnim, {
      toValue: 0,
      friction: 5,
      tension: 100,
      useNativeDriver: true,
    }).start();

    // Fade animation (only once)
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [slideAnim, fadeAnim]);
  return (
    <View style={styles.container}>
      <Animated.Text
        variant="titleMedium"
        style={[styles.textHeading, { transform: [{ translateX: slideAnim }] }]}
      >
        Welcome, discover cuts!
      </Animated.Text>
      <Animated.Text
        variant="titleLarge"
        style={[styles.textSubTitle, { opacity: fadeAnim }]}
      >
        Find nearby barbershops
      </Animated.Text>
    </View>
  );
};

export default HomeContent;

const styles = StyleSheet.create({
  container: {
    height: "50%",
    width: "90%",
  },
  textHeading: {
    color: "white",
    fontFamily: "serif",
    fontSize: 15,
  },
  textSubTitle: {
    color: "white",
    fontFamily: "serif",
    fontWeight: "bold",
    fontSize: 25,
  },
});
