import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import firebase from "firebase";
import styles from "./style";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function NewUser({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorRegister, setErrorRegister] = useState("");

  const register = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        let user = userCredential.user;
        navigation.navigate("Task", { idUser: user.uid });
      })
      .catch((error) => {
        setErrorRegister(true);
        let errorCode = error.code;
        let errorMessage = error.message;
      });
  };

  useEffect(() => {}, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={styles.title}>New User</Text>
      <TextInput
        style={styles.input}
        placeholder="enter your email"
        type="text"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="enter a password"
        type="text"
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      {errorRegister === true ? (
        <View style={styles.contentAlert}>
          <MaterialCommunityIcons
            name="alert-circle"
            size={24}
            color="#bdbdbd"
          />
          <Text style={styles.warningAlert}>User already exist</Text>
        </View>
      ) : (
        <View />
      )}
      {email === "" || password === "" ? (
        <TouchableOpacity disabled={true} style={styles.buttonRegister}>
          <Text style={styles.textButtonRegister}>Register</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.buttonRegister} onPress={register}>
          <Text style={styles.textButtonRegister}>Register</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.registration}>
        already register 
        <Text
          style={styles.linkSubscribe}
          onPress={() => navigation.navigate("Login")}
        >
          ? Login...
        </Text>
      </Text>
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
}
