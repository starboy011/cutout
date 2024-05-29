import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
const { width, height } = Dimensions.get("window");
const GlobalSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <Searchbar
      placeholder="Locate a barbershop near you"
      onChangeText={setSearchQuery}
      value={searchQuery}
      iconColor="#343a40"
      height={10}
      style={{
        width: width * 0.9,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#e9ecef",
        borderRadius: 10,
      }}
    />
  );
};

export default GlobalSearch;

const styles = StyleSheet.create({});
