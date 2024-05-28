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
        backgroundColor: "#e9ecef",
      }}
    />
  );
};

export default GlobalSearch;

const styles = StyleSheet.create({});
