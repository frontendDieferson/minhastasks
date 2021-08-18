import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Image } from 'react-native';

import firebase from '../../config/firebase';
import styles from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Platform } from 'react-native';





export default function Login({ navigation }) {
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ errorLogin, setErrorLogin ] = useState("")
    
    const loginFirebase = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
   
    let user = userCredential.user;
   
    navigation.navigate("Task", { idUser: user.uid })
  })
  .catch((error) => {
    setErrorLogin(true)  
    let errorCode = error.code;
    let errorMessage = error.message;
  });
}

    useEffect(() =>{

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
         navigation.navigate("Task", { idUser: user.uid })
        } 
        
      });


    }, [])

    return (
       <KeyboardAvoidingView 
       behavior={Platform.OS === "ios" ? "padding" : "height"}
       style={styles.container}
       
       >
        <Image style={styles.logo} source={require('../../../assets/logo.png')} />
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
        {errorLogin === true
        ?
        <View style={styles.contentAlert}>
            <MaterialCommunityIcons 
                name='alert-circle'
                size={24}
                color="#bdbdbd"
            />
            <Text style={styles.warningAlert}> Senha ou Email inválidos. Tente novamente.</Text>

        </View>

        :
            <View />

        }
        { email === "" || password === "" 
        ?
          <TouchableOpacity 
          disabled={true}
          style={styles.buttonLogin} 
          >
              
            <Text style={styles.textButtonLogin}>Login</Text>
          </TouchableOpacity>
        :

        <TouchableOpacity 
        style={styles.buttonLogin}
        onPress={loginFirebase}
        >
          <Text style={styles.textButtonLogin}>Login</Text>
        </TouchableOpacity>
         }
         <Text style={styles.registration}>
             Novo por aqui? 
         <Text 
         style={styles.linkSubscribe}
         onPress={() => navigation.navigate("NewUser")}
         >
              Crie sua conta, Grátis
         </Text>
         </Text>
         <View style={{height:100}} />

         <View style={styles.footer}>
                     
           <Image style={styles.logoFooter} source={require('../../../assets/twodevslogo.png')} />
            
         </View>
       </KeyboardAvoidingView>
    )
}