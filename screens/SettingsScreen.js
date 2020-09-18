import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";


const SettingsStack = createStackNavigator();

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
function HomeIcon(navigation) {
  return () => (
    <View style={{ marginRight: 10 }}>
      <MaterialIcons
        name="home"
        size={38}
        color={screenColors().headerTintColor}
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
}

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
      <Button title="Click Me" onPress={() => alert("Clicked")} />
    </View>
  );
};

const SettingsStackScreen = ({ navigation }) => (
  <SettingsStack.Navigator
    initialRouteName="Settings"
    screenOptions={screenColors()}
  >
    <SettingsStack.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        title: "Settings Page",
        headerLeft: MenuIcon(navigation),
        headerRight: HomeIcon(navigation),
      }}
    />
  </SettingsStack.Navigator>
);

export default SettingsStackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5B5E6A"
  },
});
