import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <StatusBar  barStyle="light-content"/>
      <Text>This is the home screen</Text>
      <Button
        title="Go to Profile Screen"
        onPress={() => {
          console.log("Profile screen button pressed");
          navigation.navigate("Profile");
        }}
      />
    </View>
  );
}

export default HomeScreen;
