import {
  SafeAreaView,
  StyleSheet,
  View,
  Animated,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useEffect } from "react";
import { Text, Button } from "react-native-paper";

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
            BookCuts
          </Text>
          <Text
            variant="headlineSmall"
            style={{ fontWeight: 300, fontFamily: "serif" }}
          >
            Get your perfect
          </Text>
          <Text
            variant="titleSmall"
            style={{ fontWeight: "bold", fontFamily: "serif" }}
          >
            haircut appointment.
          </Text>
        </Animated.View>
      </View>
      <View style={styles.image}>
        <ImageBackground
          source={require("./haircut.jpeg")}
          style={styles.backgroundImage}
        />
      </View>
      <View style={styles.field}>
        <TouchableOpacity style={{ width: "90%" }}>
          <Button icon="book" mode="contained" buttonColor="blue">
            Book Now
          </Button>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: { flex: 1 },
  titlecontainer: {
    // backgroundColor: "red",
    width: "100%",
    height: "15%",
    marginTop: "15%",
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
    justifyContent: "center",
    alignItems: "center",
    height: "10%",
    width: "100%",
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
