import { StyleSheet, View } from "react-native";
import React from "react";
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const ImageBottomBar = ({ ActiveOffer, ShopName }) => {
  const navigation = useNavigation();

  const handleLogin = (shopName) => {
    navigation.navigate("ShopDetailsScreen", { ShopName: shopName });
  };

  return (
    <View style={styles.container}>
      <View style={styles.statusContainer}>
        {ActiveOffer ? (
          <MaterialIcons name={"local-offer"} size={15} color={"tomato"} />
        ) : null}
      </View>
      <TouchableOpacity onPress={() => handleLogin(ShopName)}>
        <View style={styles.detailsContainer}>
          <FontAwesome6
            name={"arrow-right"}
            size={25}
            color={"rgb(238, 245, 255)"}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ImageBottomBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statusContainer: {
    width: 40,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    width: 40,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
