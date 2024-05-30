import { StyleSheet, Text, View, Dimensions, Animated } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { Drawer } from "react-native-paper";
import ProfileDrawerMenu from "../ProfileDrawerMenu/ProfileDrawerMenu";
const { width, height } = Dimensions.get("window");
const ProfileDrawer = () => {
  const [active, setActive] = useState("");
  const slideAnim = useRef(new Animated.Value(300)).current;
  useEffect(() => {
    Animated.spring(slideAnim, {
      toValue: 0,
      friction: 8,
      tension: 20,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);
  return (
    <Animated.View
      style={[styles.container, { transform: [{ translateX: slideAnim }] }]}
    >
      <View style={styles.profilePhotoContainer}>
        <View style={styles.profilePhoto}></View>
      </View>
      <View style={styles.ProfileDrawerMenuContainer}>
        <ProfileDrawerMenu />
      </View>
    </Animated.View>
  );
};

export default ProfileDrawer;

const styles = StyleSheet.create({
  container: {
    width: "75%",
    height: height * 0.8,
    backgroundColor: "white",
    borderRadius: 10,
    marginLeft: "24%",
  },
  profilePhotoContainer: {
    width: "100%",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  profilePhoto: {
    height: 100,
    width: 100,
    borderWidth: 1,
    borderRadius: 50,
  },
  ProfileDrawerMenuContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
