import { StyleSheet, View, Dimensions } from "react-native";
import React, { useState } from "react";
import { Avatar, Portal } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");
const Profile = () => {
  const [active, setActive] = useState(false);
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate("ProfileDrawer");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLogin}>
        <Avatar.Icon
          size={50}
          color="white"
          style={{ backgroundColor: "transparent" }}
          icon={"account"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "15%",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    position: "absolute",
    top: 80,
    width: width,
    height: height,
  },
});
