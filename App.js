import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import Task from './src/pages/Task';
import Newtask from './src/pages/NewTask';
import Details from './src/pages/Details';
import Login from './src/pages/Login';
import NewUser from './src/pages/NewUser';


import Icon from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator()

export default function App() {
  
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
        options={{
          headerTintColor:"#f92e6a",
          headerLeft: null,
          
         
        }}
        
        
      
        />
      

        <Stack.Screen 
        name="New Task"
        component={Newtask}
        options={{
          headerTintColor:"#f92e6a"
        }}
        />
                <Stack.Screen 
        name="Details"
        component={Details}
        options={{
          headerTintColor:"#f92e6a"
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
});
