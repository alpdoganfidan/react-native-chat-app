import React, { useEffect } from "react";
import { Text } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ChatList from "./screens/ChatList";
import Settings from "./screens/Settings";
import Chat from "./screens/Chat";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import { Provider } from "react-native-paper";

import { auth } from "./network/firebase";

import { onAuthStateChanged } from "firebase/auth";

const Stack = createNativeStackNavigator();

const Tabs = createBottomTabNavigator();

const TabsNavigator = () => {
  const navigation = useNavigation();

  useEffect(() => {
    //kullanıcı giriş yapmışsa devam etcek, yapmamışsa sign up ekranı
    console.log("sa");
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        console.log("as");
        navigation.navigate("SignIn");
      }
    });
  }, []);
  /*
  useEffect(() => {
    //kullanıcı giriş yapmışsa devam etcek, yapmamışsa sign up ekranı
    const isLoggedIn = false;
    if (!isLoggedIn) {
      navigation.navigate("SignUp");
    }
  }, []);
  */

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return (
            <Ionicons
              name={route.name === "ChatList" ? "chatbubbles" : "settings"}
              color={color}
              size={size}
            />
          );
        },
      })}
    >
      <Tabs.Screen name="ChatList" component={ChatList} />
      <Tabs.Screen name="Settings" component={Settings} />
    </Tabs.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Provider>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={TabsNavigator}
            options={{ headerShown: false, tabBarBadge: 10 }}
          />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ presentation: "fullScreenModal" }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ presentation: "fullScreenModal" }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
