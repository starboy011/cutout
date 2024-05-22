import { SafeAreaView, StyleSheet, View, Animated } from "react-native";
import React, { useRef, useEffect } from "react";
import { Text } from "react-native-paper";

const Login = () => {
  const slideAnim = useRef(new Animated.Value(300)).current;
  useEffect(() => {
    Animated.spring(slideAnim, {
      toValue: 0,
      friction: 5,
      tension: 100,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titlecontainer}>
        <Animated.View
          style={[styles.title, { transform: [{ translateX: slideAnim }] }]}
        >
          <Text
            variant="displayMedium"
            style={{ fontWeight: "bold", fontFamily: "serif" }}
          >
            BOOK CUTS
          </Text>
        </Animated.View>
      </View>
      <View style={styles.image}></View>
      <View style={styles.field}></View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: { flex: 1 },
  titlecontainer: {
    width: "100%",
    height: "15%",
    marginTop: 40,
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    height: "50%",
    fontWeight: "bold",
  },
  image: {
    // backgroundColor: "green",
    width: "100%",
    height: "55%",
  },
  field: {
    // backgroundColor: "blue",
    height: "30%",
    width: "100%",
  },
});
