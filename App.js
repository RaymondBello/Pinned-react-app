import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { Text, View, Button, render, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AsyncStorage from "@react-native-community/async-storage";
import MainTabScreen from "./screens/MainTabScreen";
import BookmarkScreen from "./screens/BookmarkScreen";
import SettingsScreen from "./screens/SettingsScreen";
import RootStackScreen from "./screens/RootStackScreen";
import { DrawerContent } from "./screens/DrawerContent";
import { AuthContext } from "./components/context";
import * as Animatable from "react-native-animatable";
import { firebaseConfig } from "./firebase.config";
import * as firebase from "firebase";

firebase.initializeApp(firebaseConfig);

const Drawer = createDrawerNavigator();

function App() {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const initialLogInState = {
    isLoading: true,
    username: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case "REGISTER":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLogInState
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async (foundUser) => {
        // setUserToken("fgdh");
        // setIsLoading(false);

        const userToken = String(foundUser[0].userToken);
        const userName = foundUser[0].username;

        try {
          // userToken = "dhsdsh";
          await AsyncStorage.setItem("userToken", userToken);
        } catch (e) {
          console.error(e);
        }

        console.log("user token:", userToken);
        dispatch({ type: "LOGIN", id: userName, token: userToken });
      },
      signOut: async () => {
        // setUserToken(null);
        // setIsLoading(false);

        try {
          await AsyncStorage.removeItem("userToken");
        } catch (e) {
          console.error(e);
        }

        dispatch({ type: "LOGOUT" });
      },

      // Also called Register
      signUp: () => {
        // setUserToken("fgdh");
        // setIsLoading(false);
      },
    }),
    []
  );

  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem("userToken", userToken);
      } catch (e) {
        console.error(e);
      }
      // console.log("user token:", userToken);
      dispatch({ type: "RETRIEVE_TOKEN", token: userToken });
    }, 400);

    
  }, []);

  // if (initializing) {
  if (loginState.isLoading) {
    return (
      <Animatable.View
        animation="fadeInUpBig"
        duration={200}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#5B5E6A",
        }}
      >
        <ActivityIndicator size="large" color="#8d93ab" />
      </Animatable.View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
          <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
            initialRouteName="HomeDrawer"
          >
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
          </Drawer.Navigator>
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
