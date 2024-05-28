import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Animated,
} from "react-native";
import React, { useRef, useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const ServicesBox = (props) => {
  const { title, image, translate } = props;
  const slideAnim = useRef(new Animated.Value(translate)).current;

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
      style={[styles.container, { transform: [{ translateX: slideAnim }] }]}
    >
      <TouchableOpacity>
        <ImageBackground source={image} style={styles.circle}>
          <View style={styles.title}>
            <Text style={styles.titleStyle}>{title}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default ServicesBox;

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 100,
    height: 100,
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 20,
  },
  title: {
    width: 100,
    height: 20,
    backgroundColor: "#e9ecef",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f9fa",
  },
  titleStyle: {
    fontWeight: "bold",
    fontFamily: "serif",
    fontSize: 16,
    marginTop: -1,
  },
});
