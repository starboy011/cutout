import React, { useEffect } from "react";
import { StyleSheet, Dimensions, View, BackHandler, Alert } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import Home from "../Home/Home";
import Offers from "../Offers/Offers";
import Search from "../Search/Search";
import HairStyle from "../HairStyle/HairStyle";

const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get("window");

const BottomTab = () => {
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        const routes = navigation.getState().routes;
        const currentRouteName = routes[routes.length - 1].name;

        if (currentRouteName !== "Home") {
          navigation.navigate("Home");
          return true;
        } else {
          Alert.alert("Exit App", "Are you sure you want to exit?", [
            { text: "Cancel", style: "cancel", onPress: () => {} },
            { text: "OK", onPress: () => BackHandler.exitApp() },
          ]);
          return true;
        }
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [navigation])
  );

  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName="Home"
        backBehavior="none" // We handle back behavior ourselves
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
            width: width * 1,
            height: 50,
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
