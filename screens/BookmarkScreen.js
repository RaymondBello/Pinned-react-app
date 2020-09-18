import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

const BookmarkStack = createStackNavigator();

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

const BookmarkScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Bookmark Screen</Text>
      <Button title="Click Me" onPress={() => alert("Clicked")} />
    </View>
  );
};

const BookmarkStackScreen = ({ navigation }) => (
  <BookmarkStack.Navigator
    initialRouteName="Bookmark"
    screenOptions={screenColors()}
  >
    <BookmarkStack.Screen
      name="Bookmark"
      component={BookmarkScreen}
      options={{
        title: "Bookmark Page",
        headerLeft: MenuIcon(navigation),
        headerRight: HomeIcon(navigation),
      }}
    />
  </BookmarkStack.Navigator>
);

export default BookmarkStackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5B5E6A"
  },
});
