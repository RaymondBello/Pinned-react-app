import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  TextInput,
  Platform,
  StatusBar,
  TouchableOpacity,
  Alert
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { FontAwesome, Feather, Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { AuthContext } from "../components/context";
import Users from '../model/users';

const SignInScreen = ({ navigation }) => {
  /*
   * Component Functions (JSX Element)
   */
  const [data, setData] = React.useState({
    username: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const { signIn } = React.useContext(AuthContext);

  const textInputChange = (val) => {
    if (val.trim().length >= 4 && val.trim().length <= 30) {
      setData({
        ...data,
        username: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = (val) => {
    if (val.trim().length >= 4 && val.length <= 30) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const loginHandle = (userName, password) => {
    const foundUser = Users.filter(item => {  
      return userName==item.username && password==item.password
    });

    if (data.username.length == 0||data.password.length==0) {
      Alert.alert("Wrong Input", "Username or Password cannot be empty", [{ text: "Okay" }]);
      return;
    }


    if (foundUser.length == 0) {
      Alert.alert("Invalid User", "Username or Password is incorrect", [{ text: "Okay" }]);
      return;
    }
    signIn(foundUser);
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#5B5E6A" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Sign In</Text>
      </View>
      <Animatable.View
        style={styles.footer}
        animation="fadeInUpBig"
        duration={800}
      >
        <Text style={[styles.text_footer, { marginTop: 25 }]}>Username</Text>
        <View style={styles.action}>
          <Feather name="user" color="#d6e0f0" size={26} />
          <TextInput
            placeholder="Your Username"
            placeholderTextColor="#d6e0f0"
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
            style={styles.textInput}
            // onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
          />

          {/* Change Feather icon color to "#32CD32" "#d6e0f0" when inactive */}
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceInRight">
              <Feather name="check" size={28} color="#A6D785" />
            </Animatable.View>
          ) : null}
        </View>

        {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={1000}>
            <Text style={styles.errorMsg}>
              Username must be at least 4 characters
            </Text>
          </Animatable.View>
        )}

        <Text style={[styles.text_footer, { marginTop: 15 }]}>Password</Text>
        <View style={styles.action}>
          <Feather name="lock" color="#d6e0f0" size={26} />
          <TextInput
            placeholder="Your Password"
            placeholderTextColor="#d6e0f0"
            autoCapitalize="none"
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
        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={1000}>
            <Text style={styles.errorMsg}>
              Password must be at least 8 characters
            </Text>
          </Animatable.View>
        )}

        <TouchableOpacity>
          <Text
            style={{
              textDecorationLine: "underline",
              textAlign: "right",
              color: "#d6e0f0",
              fontWeight: "bold",
              marginTop: 20,
            }}
          >
            Forgot Password
          </Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            style={[styles.button, { marginTop: 20 }, { opacity: 1 }]}
            onPress={() => {
              loginHandle(data.username, data.password);
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={[styles.buttonText]}>Sign In</Text>
              <View style={styles.buttonIcon}>
                <MaterialIcons name="navigate-next" color="#f1f3f8" size={25} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={[styles.button, { opacity: 0.6 }]}>
            <View style={{ flexDirection: "row" }}>
              <Text style={[styles.buttonText]}>Sign In With Google</Text>
              <View style={styles.buttonIcon}>
                <MaterialIcons name="navigate-next" color="#f1f3f8" size={25} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={[styles.button]}
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={[styles.buttonText]}>Register Here</Text>
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

export default SignInScreen;
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
    color: "#393b44",
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
