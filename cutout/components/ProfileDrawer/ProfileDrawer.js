import { StyleSheet, Text, View, Dimensions, Animated } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { Appbar } from "react-native-paper";
import ProfileDrawerMenu from "../ProfileDrawerMenu/ProfileDrawerMenu";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
const { width, height } = Dimensions.get("window");
const ProfileDrawer = () => {
  const slideAnim = useRef(new Animated.Value(300)).current;
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
        <Appbar.Content title="Title" />
        <Appbar.Action icon="calendar" onPress={() => {}} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>
      <SafeAreaView style={{ backgroundColor: "white" }}>
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
      </SafeAreaView>
    </View>
  );
};

export default ProfileDrawer;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: height,
    backgroundColor: "white",
  },
  profilePhotoContainer: {
    width: "100%",
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
