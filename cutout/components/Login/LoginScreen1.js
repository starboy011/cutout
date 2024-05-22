import {
  SafeAreaView,
  StyleSheet,
  Text,
  Platform,
  StatusBar,
  View,
} from "react-native";
import React from "react";

const LoginScreen1 = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}></View>
    </SafeAreaView>
  );
};

export default LoginScreen1;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
  },
});
