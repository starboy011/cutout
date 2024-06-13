import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import { Linking } from "react-native";
const ImageTopBar = () => {
  const navigation = useNavigation();

  const getDirections = async () => {
    // Request location permissions
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;
    const endPoint = {
      latitude: 51.45583409558622,
      longitude: -0.9367586067695464,
    };
    const url = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${endPoint.latitude},${endPoint.longitude}&travelmode=driving`;
    Linking.openURL(url);
  };
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome6 name={"arrow-left"} size={30} color={"white"} />
        </TouchableOpacity>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={getDirections}>
          <MaterialIcons name={"directions"} size={30} color={"white"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ImageTopBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    width: 70,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
