import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import firebase from "../../config/firebaseconfig.js";
import styles from "./style";

export default function NewTask({ navigation, route }, props) {
  const database = firebase.firestore()
  const [description, setDescription] = useState(null);

  //CRUD - CREATE (.add)
  function addTask() {
    database.collection(route.params.idUser).add({
      description: description,
      status: false,
    });
    navigation.navigate("Task");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.input}
        placeholder="atividade a ser realizada"
        onChangeText={setDescription}
        value={description}
      />
      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => {
          addTask();
        }}
      >
        <Text style={styles.iconButton}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}
