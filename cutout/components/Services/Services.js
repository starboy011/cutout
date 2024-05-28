import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import ServicesBox from "../ServicesBox/ServicesBox";
import { ScrollView } from "react-native-gesture-handler";

const Services = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ServicesBox title="HAIRCUT" />
        <ServicesBox title="TRIM" />
        <ServicesBox title="SHAVE" />
        <ServicesBox title="BEARD" />
        <ServicesBox title="HAIRCOLOR" />
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
