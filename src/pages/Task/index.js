import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'


import firebase from '../../config/firebase'
import { FontAwesome, MaterialCommunityIcons, Feather } from '@expo/vector-icons'
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
            <Text style={styles.headerTitle}>Minhas Tarefas</Text>
          
            <TouchableOpacity style={styles.buttonLogout}
            onPress={() => {logout()}} >
                <MaterialCommunityIcons 

                name="logout"
                size={30}
                color= "#E63946"
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
            <Feather 
            name="trash-2"
            size={23}
            color="#E63946"
            style={{padding: 5}}
            
            >
                
            </Feather>
               
            </TouchableOpacity>
            
            <Text 
            style={styles.DescriptionTask}
            
            
            
            > 
            
            {item.description} 
            
            </Text>
            <TouchableOpacity 
            style={styles.editTasks}
            onPress={() =>{
                navigation.navigate("Details", {
                    id: item.id,
                    description: item.description,
                    idUser: route.params.idUser
                })
            }}
            
            >

            <Feather 
            name='edit'
            size={23}
            color="#1ABC9C"
            >
            </Feather>
            </TouchableOpacity>
            
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