import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, FlatList } from 'react-native'


import firebase from '../../config/firebase'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './styles'

export default function Task({ navigation, route }) {
    const [ task, setTask ] = useState([])
    const database = firebase.firestore()


    function logout() {
        firebase.auth().signOut().then(() => {
            navigation.navigate("Login")
          }).catch((error) => {
            
          });
    }

    function deleteTask(id) {
        database.collection(route.params.idUser).doc(id).delete()
    }
    
    useEffect(() => {
        database.collection(route.params.idUser).onSnapshot((query) => {
            const list = [];
            query.forEach((doc)=> {
                list.push({...doc.data(), id: doc.id});
            })
            setTask(list)
        });
    }, []);

    return(
        <View style={styles.container}>
            
            <TouchableOpacity style={styles.buttonLogout}
            onPress={() => {logout()}} >
                <MaterialCommunityIcons 
                
                name="location-exit"
                size={22}
                color= "#f92e6a"
                />
                
                
            </TouchableOpacity>
            <FlatList 
            showsVerticalScrollIndicator={false}
            data={task}
            renderItem={( { item } ) => {
                return(
                <View style={styles.Tasks}>
                     <TouchableOpacity style={styles.deteleTask}
                        onPress={() => {
                        deleteTask(item.id)
            }}
            
            >
            <FontAwesome 
            name="trash-o"
            size={23}
            color="#f92e6a"
            style={{padding: 8}}
            
            >
                
            </FontAwesome>
               
            </TouchableOpacity>
            <Text 
            style={styles.DescriptionTask}
            onPress={() =>{
                navigation.navigate("Details", {
                    id: item.id,
                    description: item.description,
                    idUser: route.params.idUser
                })
            }}
            > 
            {item.description} 
            </Text>
        </View>
                )
        }}
            
            
            />
            <TouchableOpacity style={styles.buttonNewTask}
            onPress={() => navigation.navigate("New Task", { idUser: route.params.idUser })}>
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
        </View>
    )
}