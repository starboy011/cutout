import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "react-native-paper";

const HomeContent = () => {
  return (
    <View style={styles.container}>
      <Text variant="titleMedium" style={{ color: "white" }}>
        Welcome, discover cuts!
      </Text>
      <Text variant="titleLarge" style={{ color: "white", fontWeight: "bold" }}>
        Find nearby barbershops
      </Text>
    </View>
  );
};

export default HomeContent;

const styles = StyleSheet.create({
  container: {
    height: "50%",
    width: "90%",
  },
});
