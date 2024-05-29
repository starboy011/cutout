import React from "react";
import { SafeAreaView, StyleSheet, Dimensions, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Home from "../Home/Home";
import Offers from "../Offers/Offers";
const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get("window");
const BottomTab = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName={Home}
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "black",
          tabBarStyle: {
            backgroundColor: "white",
            width: width * 0.95,
            marginLeft: width * 0.025,
            marginBottom: 5,
            height: 50,
            borderRadius: 10,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home";
            } else if (route.name === "Offers") {
              iconName = focused ? "local-offer" : "local-offer";
            }
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Offers"
          component={Offers}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
});
