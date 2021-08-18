import React, { useState,  } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'


import firebase from '../../config/firebase'
import styles from './styles'






export default function Newtask({ navigation, route }, props) {
    const [ description, setDescription ] = useState(null)
    const database = firebase.firestore()



    function addTask() {
        database.collection(route.params.idUser).add({
            description: description,
            status: false
        })
        navigation.navigate("Task")
    }
    return(
        <View style={styles.container}>
            <Text style={styles.label}>Adicione um Lembrete</Text>
            <TextInput 
                style={styles.inputText}
                placeholder="Ex: Estudar..."
                onChangeText={setDescription}
                value={description}
            
            />
            <TouchableOpacity style={styles.buttonNewTask}
            onPress={() =>{addTask()}}>
                <Text style={styles.iconButton}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}