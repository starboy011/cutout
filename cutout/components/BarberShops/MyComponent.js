import React from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";
import {
  useFonts,
  Caveat_400Regular,
  Caveat_700Bold,
} from "@expo-google-fonts/caveat";

const MyComponent = () => {
  let [fontsLoaded] = useFonts({
    Caveat_400Regular,
    Caveat_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.regularText}>This is Caveat Regular!</Text>
      <Text style={styles.boldText}>This is Caveat Bold!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  regularText: {
    fontFamily: "Caveat_400Regular",
    fontSize: 24,
  },
  boldText: {
    fontFamily: "Caveat_700Bold",
    fontSize: 24,
  },
});

export default MyComponent;
