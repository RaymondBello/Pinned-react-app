import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { AuthContext } from "../components/context";

export function DrawerContent(props) {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const { signOut } = React.useContext(AuthContext);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <View style={{ flex: 1 ,backgroundColor:"#8d92a6"}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <Avatar.Image
                source={{
                  uri:
                    "https://avatars1.githubusercontent.com/u/61327086?s=400&u=a272b1f5bd6fe11ae11a33668b4b469864bdc003&v=4",
                }}
                size={70}
              />
              <View
                style={{
                  marginLeft: 12,
                  marginTop: 10,
                  flexDirection: "column",
                }}
              >
                <Title style={styles.title}>Test Account</Title>
                <Caption style={styles.caption}>@ray-dev</Caption>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph
                  style={[styles.paragraph, styles.caption, styles.stats]}
                >
                  342
                </Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph
                  style={[styles.paragraph, styles.caption, styles.stats]}
                >
                  313
                </Paragraph>
                <Caption style={styles.caption}>Pins</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section styles={styles.drawerSection}>
            <DrawerItem
              icon={(colour, size) => (
                <Ionicons name="md-home" color={"#393b44"} size={26} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate("Home");
                console.log("Home pressed");
              }}
            />
            <DrawerItem
              icon={(colour, size) => (
                <Ionicons name="ios-person" color={"#393b44"} size={26} />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate("Profile");
                console.log("Profile pressed");
              }}
            />

            <DrawerItem
              icon={(colour, size) => (
                <Ionicons name="ios-text" color={"#393b44"} size={26} />
              )}
              label="Chat"
              onPress={() => {
                props.navigation.navigate("Chat");
                console.log("Chat pressed");
              }}
            />
            <DrawerItem
              icon={(colour, size) => (
                <Ionicons name="md-bookmarks" color={"#393b44"} size={26} />
              )}
              label="Bookmarks"
              onPress={() => {
                props.navigation.navigate("BookmarkScreen");
                console.log("Bookmarks pressed");
              }}
            />

            <DrawerItem
              icon={(colour, size) => (
                <Ionicons name="ios-settings" color={"#393b44"} size={26} />
              )}
              label="Settings"
              onPress={() => {
                props.navigation.navigate("SettingsScreen");
                console.log("Settings pressed");
              }}
            />
          </Drawer.Section>
          <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}
            >
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={isDarkTheme} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={(colour, size) => (
            <Ionicons name="ios-exit" color={"#393b44"} size={26} />
          )}
          label="Signout"
          onPress={() => {
            console.log("signout pressed")
            signOut()
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 20,
    marginTop: 5,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "normal",
  },
  stats: {
    fontWeight: "bold",
  },

  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    paddingBottom:20,
    marginBottom: 0,
    marginTop: 0,
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
