import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome6 } from "@expo/vector-icons";
const ImageTopBar = ({ Status, Distance }) => {
  const [backColor, setBackColor] = useState(true);
  useEffect(() => {
    if (Status == "CLOSED") {
      setBackColor(false);
    }
  }, [Status]);

  return (
    <View style={styles.container}>
      <View style={styles.statusContainer}>
        <View
          style={[
            styles.status,
            {
              backgroundColor: backColor ? "rgba(64, 165, 120, 0.8)" : "tomato",
            },
          ]}
        >
          <Text style={styles.statusText}>{Status}</Text>
        </View>
      </View>
      <View style={styles.distanceContainer}>
        <View style={styles.distanceImageContainer}>
          <FontAwesome6
            name={"motorcycle"}
            size={15}
            color={"rgb(238, 245, 255)"}
          />
        </View>
        <View style={styles.distanceContentContainer}>
          <Text style={styles.distanceText}>{Distance}</Text>
        </View>
      </View>
    </View>
  );
};

export default ImageTopBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statusContainer: {
    width: 80,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  status: {
    width: "80%",
    backgroundColor: "rgba(64, 165, 120,0.8)",
    height: "60%",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  statusText: {
    fontSize: 14,
    fontFamily: "serif",
    fontWeight: "700",
    color: "white",
    // letterSpacing: 1.5,
  },
  distanceContainer: {
    width: 100,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  distanceImageContainer: {
    width: "40%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(243, 248, 255,0.2)",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  distanceContentContainer: {
    width: "55%",
    height: "50%",
    backgroundColor: "rgba(243, 248, 255,0.2)",
    justifyContent: "center",
    alignItems: "center",
    borderTopEndRadius: 10,
    borderBottomRightRadius: 10,
  },
  distanceText: {
    color: "white",
    fontSize: 15,
    fontWeight: "400",
  },
});
