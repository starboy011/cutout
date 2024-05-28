import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import ServicesBox from "../ServicesBox/ServicesBox";
import { ScrollView } from "react-native-gesture-handler";
import haircutimage from "./haircut.png";
import trimerimage from "./trimerImage.png";
import shaveimage from "./shave.jpeg";
import beardimage from "./beard.jpeg";
import haircolorimage from "./haircolor.jpeg";
const Services = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ServicesBox title="HAIRCUT" image={haircutimage} />
        <ServicesBox title="TRIM" image={trimerimage} />
        <ServicesBox title="SHAVE" image={shaveimage} />
        <ServicesBox title="BEARD" image={beardimage} />
        <ServicesBox title="HAIRCOLOR" image={haircolorimage} />
      </ScrollView>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
