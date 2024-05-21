import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";

const ScissorAnimation = () => {
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={require("./SplashScreen.gif")}
          style={styles.backgroundImage}
        ></ImageBackground>
      </View>
    </>
  );
};

export default ScissorAnimation;

const styles = StyleSheet.create({
  container: { width: "20%", height: "10%" },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
