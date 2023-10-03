import { Image, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../styles'
import main from '../assets/Login/main.png'
import { useNavigation } from '@react-navigation/native'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { FIREBASE_AUTH } from '../FirebaseConfig'



const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigation=useNavigation()
    const auth = FIREBASE_AUTH;


    const signIn = async () => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
            alert("Check your emails !");
            navigation.navigate("Home")
        } catch (error) {
            console.log(error);
            alert("Sign in failed :" + error.message);
        } finally {
        }
    };

    return (
        <View style={[styles.detailser1, { width: '100%', height: '100%', backgroundColor: '#F9F9FA' }]}>
            <Image source={main} style={styles.mainStyle} />
            <SafeAreaView>

                <Text style={styles.loginStyle}>Log-in</Text>

                <KeyboardAvoidingView behavior="padding" style={{padding:20,marginTop:20}}>
                    <Text style={styles.txt}>Email</Text>

                    <View style={{width:'100%',height:45, borderRadius: 9,borderColor:'#ADADAD',borderWidth:0.5,marginTop:3}}>
                    <TextInput
                   
                   value={email}
                   style={styles.input}
                   placeholder="Your Email Id"
                   autoCapitalize="none"
                   placeholderTextColor={'#888A8C'}
                   onChangeText={(text) => setEmail(text)}
               ></TextInput>
                    </View>

                   

                    <Text style={[styles.txt,{ marginVertical: 16 }]}>Password</Text>
                    <View style={{width:'100%',height:45, borderRadius: 9,borderColor:'#ADADAD',borderWidth:0.5,marginTop:3}}>

                    <TextInput
                        value={password}
                        style={styles.input}
                        placeholder="password"
                        autoCapitalize="none"
                        placeholderTextColor={'#888A8C'}
                        secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)}
                    ></TextInput>
                    </View>

                    <TouchableOpacity style={{marginTop:7,alignSelf:'flex-end'}} >
                        <Text style={styles.frgot} >Forgot password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnView} onPress={() => signIn()}>
                        <Text style={{fontSize:16,fontWeight:'600'}}>
                            Login
                        </Text>

                    </TouchableOpacity>

                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:15}}>
                    <Text>Don't have an account? </Text>

                    <TouchableOpacity onPress={()=>{navigation.navigate('Signup')}}>
                    <Text style={{color:'#9FC341'}}>Signup</Text>

                    </TouchableOpacity>
                    </View>

                   

                </KeyboardAvoidingView>

            </SafeAreaView>
        </View>
    )
}

export default Login

