import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import ExploreScreen from "./ExploreScreen";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import ChatScreen from "./ChatScreen";
import { StatusBar } from "expo-status-bar";

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ChatStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function screenColors() {
  return {
    headerStyle: {
      backgroundColor: "#393b44",
    },
    headerTintColor: "#d6e0f0",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  };
}
function MenuIcon(navigation) {
  return () => (
    <View style={{ marginLeft: 10 }}>
      <MaterialIcons
        name="menu"
        size={39}
        color={screenColors().headerTintColor}
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    </View>
  );
}

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator initialRouteName="Home" screenOptions={screenColors()}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "Home Page",
        headerLeft: MenuIcon(navigation),
      }}
    />
  </HomeStack.Navigator>
);

const ProfileStackScreen = ({ navigation }) => (
  <ProfileStack.Navigator
    initialRouteName="Home"
    screenOptions={screenColors()}
  >
    <ProfileStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        title: "Profile Page",
        headerLeft: MenuIcon(navigation),
      }}
    />
  </ProfileStack.Navigator>
);

const ChatStackScreen = ({ navigation }) => (
  <ChatStack.Navigator initialRouteName="Home" screenOptions={screenColors()}>
    <ChatStack.Screen
      name="Chat"
      component={ChatScreen}
      options={{
        title: "Chat Page",
        headerLeft: MenuIcon(navigation),
      }}
    />
  </ChatStack.Navigator>
);

const ExploreStackScreen = ({ navigation }) => (
  <ExploreStack.Navigator
    initialRouteName="Home"
    screenOptions={screenColors()}
  >
    <ExploreStack.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        title: "Explore Page",
        headerLeft: MenuIcon(navigation),
      }}
    />
  </ExploreStack.Navigator>
);

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#d6e0f0"
    inactiveColor="#8d93ab"
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarColor: "#393b44",
        tabBarIcon: ({ color }) => (
          <Ionicons name="md-home" color={color} size={28} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={ExploreStackScreen}
      options={{
        tabBarLabel: "Explore",
        tabBarColor: "#393b44",
        tabBarBadge: true,
        tabBarIcon: ({ color }) => (
          <View style={{marginBottom:-1 }}>
            <Ionicons name="md-globe" color={color} size={28} />

          </View>
        ),
      }}
    />
    <Tab.Screen
      name="Chat"
      component={ChatStackScreen}
      options={{
        tabBarLabel: "Chat",
        tabBarColor: "#393b44",
        tabBarBadge: true,
        tabBarIcon: ({ color }) => (
          <Ionicons name="ios-text" color={color} size={28} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: "Profile",
        tabBarColor: "#393b44",
        tabBarIcon: ({ color }) => (
          <Ionicons name="ios-person" color={color} size={28} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;
