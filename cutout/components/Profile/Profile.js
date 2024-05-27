import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Avatar } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

const Profile = () => {
  const [active, setActive] = useState(false);
  return (
    <View style={styles.container}>
      {!active ? (
        <TouchableOpacity onPress={() => setActive(!active)}>
          <Avatar.Icon
            size={50}
            color="white"
            style={{ backgroundColor: "transparent" }}
            icon="account"
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => setActive(!active)}>
          <Avatar.Icon
            size={50}
            color="white"
            style={{ backgroundColor: "transparent" }}
            icon="account-off"
          />
        </TouchableOpacity>
      )}
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
});
