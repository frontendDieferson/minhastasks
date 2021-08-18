import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Image } from 'react-native';

import firebase from '../../config/firebase';
import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Platform } from 'react-native';


export default function NewUser({ navigation }) {
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ errorRegister, setErrorRegister] = useState("")


    const register = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    
    let user = userCredential.user;
    navigation.navigate("Task", { idUser: user.uid })
    
  })
  .catch((error) => {
      setErrorRegister(true)
    let errorCode = error.code;
    var errorMessage = error.message;
    
  });
    }

    return (
        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        
        >
         <Image style={styles.logo} source={require('../../../assets/logo.png')} />
         <Text style={styles.title}>Crie sua Conta</Text>
         <TextInput
         style={styles.input}
         placeholder="Seu e-mail"
         type="text"
         onChangeText={(text)=> setEmail(text)}
         value={email}
         
         />
 
 
         <TextInput 
                 style={styles.input}
                 secureTextEntry={true}
                 placeholder="Sua Senha"
                 type="text"
                 onChangeText={(text)=> setPassword(text)}
                 value={password}
         
         
         />
         {errorRegister === true
        ?
        <View style={styles.contentAlert}>
            <MaterialCommunityIcons 
                name='alert-circle'
                size={24}
                color="#bdbdbd"
            />
            <Text style={styles.warningAlert}> Opa, parece que você já tem um cadastro</Text>

        </View>

        :
            <View />

        }
        { email === "" || password === "" 
        ?
          <TouchableOpacity 
          disabled={true}
          style={styles.buttonRegister} 
          >
              
            <Text style={styles.textButtonRegister}>Registrar</Text>
          </TouchableOpacity>
        :

        <TouchableOpacity 
        style={styles.buttonRegister}
        onPress={register}
        >
          <Text style={styles.textButtonRegister}>Registrar</Text>
        </TouchableOpacity> 
        }
        <Text style={styles.login}>
             Já tenho cadastro! 
         <Text 
         style={styles.linkLogin}
         onPress={() => navigation.navigate("Login")}
         >
              Faça seu Login...
         </Text>
         </Text>
         <View style={{height:100}} />

         <View style={styles.footer}>
                     
                     <Image style={styles.logoFooter} source={require('../../../assets/twodevslogo.png')} />
                      
                   </View>
         </KeyboardAvoidingView>
    )
}