import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ScissorAnimation from "./components/SplashScreen/ScissorAnimation";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScissorAnimation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    height: "100%",
    width: "100%",
  },
});
