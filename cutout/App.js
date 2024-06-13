import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ScissorAnimation from "./components/SplashScreen/ScissorAnimation";
import Login from "./components/Login/Login";
import { Provider as PaperProvider } from "react-native-paper";
import LoginScreen1 from "./components/Login/LoginScreen1";
import { Ionicons } from "@expo/vector-icons";
import BottomTab from "./components/BottomTab/BottomTab";
import ProfileDrawer from "./components/ProfileDrawer/ProfileDrawer";
import ShopDetailsScreen from "./components/ShopDetailsScreen/ShopDetailsScreen";
import CustomeDrawer from "./components/Drawer/CustomeDrawer";
import BookingScreen from "./components/BookingScreen/BookingScreen";

const Stack = createStackNavigator();

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {showSplash ? (
            <Stack.Screen name="Splash" component={ScissorAnimation} />
          ) : (
            <>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="LoginScreen1" component={LoginScreen1} />
              <Stack.Screen name="BottomTab" component={BottomTab} />
              <Stack.Screen
                name="ShopDetailsScreen"
                component={ShopDetailsScreen}
              />
              <Stack.Screen name="CustomeDrawer" component={CustomeDrawer} />
              <Stack.Screen name="ProfileDrawer" component={ProfileDrawer} />
              <Stack.Screen name="BookingScreen" component={BookingScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
