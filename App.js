import React from 'react';
import { StyleSheet, View, Button, TouchableOpacity,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {  MaterialCommunityIcons } from '@expo/vector-icons'
import Task from './src/pages/Task';
import Newtask from './src/pages/NewTask';
import Details from './src/pages/Details';
import Login from './src/pages/Login';
import NewUser from './src/pages/NewUser';

import firebase from './src/config/firebase'




const Stack = createStackNavigator()



export default function App({ navigation }) {
      
  
       function logout() {
        firebase.auth().signOut().then(() => {
            navigation.navigation("Login")
          }).catch((error) => {
            
          });
    }
    
 
   
   
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen 
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen 
        name="NewUser"
        component={NewUser}
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen 
        name="Task"
        component={Task}
        options={() =>({
          headerShown: false,
          headerTitle: 'Minhas Tarefas',
          headerLeft: null,
          headerTintColor: '#f92e6a',
       
          
          
          
         
          
        })}
        
        

        />
      

        <Stack.Screen 
        name="New Task"
        component={Newtask}
        options={{
          headerTintColor:"#ECF0F1",
          headerStyle:{
            backgroundColor: '#34495E',
          },
          headerTitle: 'Adicionar Tarefa',
        }}
        />
                <Stack.Screen 
        name="Details"
        component={Details}
        options={{
          headerStyle: {
            backgroundColor: '#34495E',
          },
          headerTintColor:"#ECF0F1",
          headerTitle: 'Editar Tarefa',
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLogout: {
    position: 'relative',
    right: 10,
  }
});
