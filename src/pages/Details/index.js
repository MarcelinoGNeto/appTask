import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import database from '../../config/firebaseconfig.js'
import styles from './style'

export default function Details({navigation, route}){
    const [descriptionEdit, setDescriptionEdit] = useState(route.params.description)
    const idTask = route.params.id

    //CRUD - UPDATE (.update)
    function editTask(description, id){
        database.collection('Tasks').doc(id).update({
            description: description,
        })
        navigation.navigate('Task')
    }

    return(
        <View style={styles.container}>
            <Text style={styles.label}>Descrição</Text>
            <TextInput 
            style={styles.input}
            placeholder='Digite a atualização'
            onChangeText={setDescriptionEdit}
            value={descriptionEdit}
            />
            <TouchableOpacity
            style={styles.buttonNewTask}
            onPress={()=>{
                editTask(descriptionEdit, idTask)
            }}
            >
                <Text style={styles.iconButton}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}