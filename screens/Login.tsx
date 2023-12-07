/* tslint:disable */
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Login = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Login </Text>
      <TextInput style={styles.inputDesign} placeholder="Enter Login E-Mail" />
      <TextInput style={styles.inputDesign} placeholder="Enter Login E-Mail" />
      <TouchableOpacity style={styles.ButtonLogin}>
        <Text
          style={styles.textStyle}
          onPress={() => {
            navigation.navigate("Homescreen");
          }}
        >
          {" "}
          Login Here{" "}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
  },
  title: {
    fontSize: 40,
    fontWeight: "800",
    color: "#0b6eba",
  },
  inputDesign: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    width: "90%",
    borderRadius: 10,
    backgroundColor: "#fff",
    borderColor: "black",
    marginTop: 30,
  },
  ButtonLogin: {
    height: 70,
    width: "70%",
    backgroundColor: "#0b6eba",
    marginTop: 40,
    borderRadius: 20,
  },
  textStyle: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "500",
    textAlign: "center",
    marginTop: 10,
  },
});
