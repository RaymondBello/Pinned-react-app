import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Linking,
  Dimensions,
  TextInput,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import * as WebBrowser from 'expo-web-browser';
import LinearGradient from "react-native-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { FontAwesome, Feather, Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

const onTextTermsOfService = () => {
  console.log("Terms of Service pressed");
  WebBrowser.openBrowserAsync('https://google.com');
}
const onTextPrivacyPolicy = () => {
  console.log("Privacy Policy pressed");
  WebBrowser.openBrowserAsync('https://google.com');
}


const RegisterScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    email: "",
    password: "",
    confirm_password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const handleConfirmPasswordChange = (val) => {
    setData({
      ...data,
      confirm_password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#5B5E6A" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register</Text>
      </View>
      <Animatable.View
        style={styles.footer}
        animation="fadeInUpBig"
        duration={800}
      >
        <Text style={[styles.text_footer, { marginTop: 25 }]}>Email</Text>
        <View style={styles.action}>
          <Feather name="user" color="#d6e0f0" size={26} />
          <TextInput
            placeholder="Your Email"
            placeholderTextColor="#d6e0f0"
            autoCapitalize="sentences"
            onChangeText={(val) => textInputChange(val)}
            style={styles.textInput}
          />

          {/* Change Feather icon color to "#32CD32" "#d6e0f0" when inactive */}
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" size={24} color="#b1c4e2" />
            </Animatable.View>
          ) : null}
        </View>
        <Text style={[styles.text_footer, { marginTop: 15 }]}>Password</Text>
        <View style={styles.action}>
          <Feather name="lock" color="#d6e0f0" size={26} />
          <TextInput
            placeholder="Your Password"
            placeholderTextColor="#d6e0f0"
            autoCapitalize="sentences"
            style={styles.textInput}
            secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {/* Change Feather icon color to "#7CFC00" "#d6e0f0" when inactive */}
            <Feather
              name={data.secureTextEntry ? "eye-off" : "eye"}
              size={24}
              color="#b1c4e2"
            />
          </TouchableOpacity>
        </View>
        <Text style={[styles.text_footer, { marginTop: 15 }]}>
          Confirm Password
        </Text>
        <View style={styles.action}>
          <Feather name="lock" color="#d6e0f0" size={26} />
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="#d6e0f0"
            autoCapitalize="sentences"
            style={styles.textInput}
            secureTextEntry={data.confirm_secureTextEntry ? true : false}
            onChangeText={(val) => handleConfirmPasswordChange(val)}
          />
          <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
            {/* Change Feather icon color to "#7CFC00" "#d6e0f0" when inactive */}
            <Feather
              name={data.confirm_secureTextEntry ? "eye-off" : "eye"}
              size={24}
              color="#b1c4e2"
            />
          </TouchableOpacity>
        </View>
        <Text style={[styles.text_terms_conditions, { marginTop: 15 }]}>
          <Text>By signing up you agree to our </Text>
          <Text
            style={{ fontWeight: "bold" ,fontStyle:"italic"}}
            onPress={onTextTermsOfService}
          >
            Terms of service
          </Text>
          <Text> and </Text>
          <Text
            style={{ fontWeight: "bold",fontStyle:"italic" }}
            onPress={onTextPrivacyPolicy}
          >
            Privacy policy
          </Text>
        </Text>
        <View>
          <TouchableOpacity
            style={[styles.button, { marginTop: 20 }, { opacity: 1 }]}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={[styles.buttonText]}>Register</Text>
              <View style={styles.buttonIcon}>
                <MaterialIcons name="navigate-next" color="#f1f3f8" size={25} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={[styles.button, { opacity: 0.6 }]}
            onPress={() => navigation.navigate("SignInScreen")}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={[styles.buttonText]}>Sign In</Text>
              <View style={styles.buttonIcon}>
                <MaterialIcons name="navigate-next" color="#f1f3f8" size={25} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default RegisterScreen;
const { height, width } = Dimensions.get("screen");
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
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
  },

  footer: {
    flex: 2,
    backgroundColor: "#8d93ab",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // paddingVertical: 50,
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
  text_header: {
    color: "#d6e0f0",
    fontWeight: "bold",
    fontSize: 60,
    paddingBottom: 20,
    // marginLeft:1
  },
  text_footer: {
    color: "#d6e0f0",
    fontSize: 18,
  },
  text_terms_conditions: {
    color: "#d6e0f0",
    fontSize: 15,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1.1,
    borderBottomColor: "#d6e0f0",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : 0,
    paddingLeft: 10,
    color: "#d6e0f0",
    // backgroundColor:"#f1f3f8"
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
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
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});
