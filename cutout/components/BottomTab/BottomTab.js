import React from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import Home from "../Home/Home";
import Offers from "../Offers/Offers";
import Search from "../Search/Search";
import HairStyle from "../HairStyle/HairStyle";
const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get("window");
const BottomTab = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName="Home"
        backBehavior="initinalRoute"
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "#176B87",
          tabBarInactiveTintColor: "black",
          tabBarActiveBackgroundColor: "#B4D4FF",
          tabBarShowLabel: false,
          tabBarItemStyle: {
            borderRadius: 20,
            marginLeft: 25,
            marginRight: 25,
            height: 40,
            marginTop: 5,
          },
          tabBarStyle: {
            backgroundColor: "#EEF5FF",
            width: width * 0.96,
            marginBottom: 5,
            height: 50,
            borderRadius: 10,
          },
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Offers") {
              iconName = "local-offer";
            } else if (route.name === "Search") {
              iconName = "search";
            } else if (route.name === "Face") {
              iconName = "face-retouching-natural";
            }

            const size = focused ? 30 : 25;

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
          name="Face"
          component={HairStyle}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
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
    justifyContent: "center",
    alignItems: "center",
  },
});
