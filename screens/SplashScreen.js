import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  StyleSheet,
  Image,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import * as Animatable from 'react-native-animatable';

const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#5B5E6A" barStyle="light-content"/>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duration={3000}
          source={require("../assets/logo1.png")}
          style={styles.logo}
          resizeMode="stretch"
          shadowRadius="1"
          shadowOpacity="0.8"
          shadowOffset={{ height: 2, width: 2 }}
        />
      </View>
      <Animatable.View
        style={styles.footer}
        animation="fadeInUpBig"
        duration={1300}
      >
        <Text style={styles.title}>Connect and Share World Events 📍 </Text>
        {/* <Text style={styles.text}>Authenticate</Text> */}
        <View>
          <TouchableOpacity
            style={[styles.button,{marginTop:30}]}
            onPress={()=>navigation.navigate("SignInScreen")}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={[styles.buttonText]}>Get Started</Text>
              <View style={styles.buttonIcon}>
                <MaterialIcons name="navigate-next" color="#f1f3f8" size={25} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        {/* <View>
          <TouchableOpacity style={styles.button}>
            <View style={{ flexDirection: "row" }}>
              <Text style={[styles.buttonText]}>Sign In With Google</Text>
              <View style={styles.buttonIcon}>
                <MaterialIcons name="navigate-next" color="#f1f3f8" size={25} />
              </View>
            </View>
          </TouchableOpacity>
        </View> */}
      </Animatable.View>
    </View>
  );
};

export default SplashScreen;

const { height, width} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
  },
  buttonIcon: {
    marginLeft: -10,
    marginTop: "auto",
    marginBottom: "auto",
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
    color: "#f1f3f8",
  },

  container: {
    flex: 1,
    backgroundColor: "#5B5E6A",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  footer: {
    flex: 1,
    backgroundColor: "#8d93ab",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: "#d6e0f0",
    fontSize: 33,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  text: {
    color: "#393b44",
    marginTop: 5,
    textAlign: "center",
  },
  appButton: {
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#393b44",
    padding: 5,
    borderRadius: 40,
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: { height: 5 },
    opacity: 0.6,
  },
  button: {
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#393b44",
    padding: 5,
    borderRadius: 40,
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: { height: 5 },
    opacity: 0.6,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#393b44",
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
});
