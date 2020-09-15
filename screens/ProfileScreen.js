import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>This is the profile screen</Text>
      <Button
        title="Go to profile screen again"
        onPress={() => {
          console.log("Profile screen button pressed");
          navigation.navigate("Profile");
        }}
      />
      <Button
        title="Go to Home Screen"
        onPress={() => {
          console.log("Home screen button pressed");
          navigation.navigate("Home");
        }}
      />
      <Button
        title="Go back"
        onPress={() => {
          console.log("Back button pressed");
          navigation.goBack();
        }}
      />
      <Button
        title="Go to first screen"
        onPress={() => {
          console.log("First screen button pressed");
          // navigation.popToTop();
        }}
      />
    </View>
  );
}

export default ProfileScreen;
