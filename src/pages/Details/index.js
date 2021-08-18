import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import firebase from '../../config/firebase'

import styles from './styles'

export default function Details({ navigation, route }) {

    
    const [ descriptionEdit, setDescriptionEdit ] = useState(route.params.description)
    const idTask = route.params.id
    const database = firebase.firestore()

    function editTask(description, id) {
        database.collection(route.params.idUser).doc(id).update({
            description: description,
        })
        navigation.navigate("Task")
    }



    return(
        <View style={styles.container}>
        <Text style={styles.label}>Descrição</Text>
        <TextInput 
            style={styles.inputText}
            placeholder="Ex: Estudar..."
            onChangeText={setDescriptionEdit}
            value={descriptionEdit}
        
        />
        <TouchableOpacity style={styles.buttonNewTask}
        onPress={() =>{editTask(descriptionEdit, idTask)}}>
            <Text style={styles.iconButton}>Salvar</Text>
        </TouchableOpacity>
    </View>
)
    
}