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
        <ServicesBox title="HAIRCUT" image={haircutimage} translate={400} />
        <ServicesBox title="TRIM" image={trimerimage} translate={600} />
        <ServicesBox title="SHAVE" image={shaveimage} translate={800} />
        <ServicesBox title="BEARD" image={beardimage} translate={1000} />
        <ServicesBox
          title="HAIRCOLOR"
          image={haircolorimage}
          translate={1200}
        />
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
