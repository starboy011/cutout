import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
const { width, height } = Dimensions.get("window");
const MetaMessages = () => {
  return (
    <View style={styles.container}>
      <Text>MetaMessages</Text>
    </View>
  );
};

export default MetaMessages;

const styles = StyleSheet.create({
  container: {},
});
