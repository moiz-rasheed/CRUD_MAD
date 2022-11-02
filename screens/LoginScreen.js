import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import {
  Button,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";

import { db } from "../firebase";
import HomeScreen from "../screens/HomeScreen";
import { useNavigation } from "@react-navigation/core";
const LoginScreen = () => {
  const navigation = useNavigation();
  const initalState = {
    name: "",
    email: "",
    phone: "",
    password: "",
  };

  const [state, setState] = useState(initalState);
  function testing() {
    console.log(state.name);
    console.log(state.email);
    console.log(state.phone);
  }
  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };
  var username;
  var pass;
  const logintosystem = async () => {
    var testname = state.name;
    db.collection("users").doc(state.name).get({
      name: testname,
    });
    var setlogin = name;
    if (setlogin == testname) {
      console.log("login sucess");
    }
  };
  const saveNewUser = async () => {
    if (state.name === "") {
      alert("please provide a name");
    } else {
      db.collection("users").doc(state.name).set({
        name: state.name,
        email: state.email,
        phone: state.phone,
        password: state.password,
      });
      navigation.navigate("Home");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      //behavior="padding"
    >
      <Text style={styles.paiyaa}>CRUD Application</Text>
      {/* Email Input */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          onChangeText={(value) => handleChangeText(value, "name")}
          value={state.name}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          //numberOfLines={4}
          onChangeText={(value) => handleChangeText(value, "email")}
          value={state.email}
          style={styles.input}
        />
        <TextInput
          placeholder="Phone"
          onChangeText={(value) => handleChangeText(value, "phone")}
          value={state.phone}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          onChangeText={(value) => handleChangeText(value, "password")}
          value={state.password}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={saveNewUser} style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <Text style={styles.txt}>....................</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Name"
            onChangeText={(value) => handleChangeText(value, "name")}
            value={state.name}
            style={styles.inputlogin}
          />
          <TextInput
            placeholder="Password"
            onChangeText={(value) => handleChangeText(value, "password")}
            value={state.password}
            style={styles.inputlogin}
            secureTextEntry
          />
        </View>

        <TouchableOpacity
          onPress={logintosystem}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.85,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "100%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    marginBottom: 10,
    marginHorizontal: 21,
  },
  inputlogin: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    marginTop: 10,
  },
  buttonContainer: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  paiyaa: {
    color: "#0782f9",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 10,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
  txt: {
    paddingTop: 20,
    paddingBottom: 20,
  },
});

export default LoginScreen;
