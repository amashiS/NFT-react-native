import { Alert, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../styles'
import { useNavigation } from '@react-navigation/native'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { FIREBASE_AUTH } from '../FirebaseConfig'
import axios from 'axios';


const Signup = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [address, setAddress] = useState()
    const [password, setPassword] = useState()
    const navigation = useNavigation()
    const auth = FIREBASE_AUTH;


    const signUp = async () => {

        try {
            const response = await createUserWithEmailAndPassword(
                auth,
                name,
                email,
                phone,
                address,
                password
            );
            console.log(response);
            //   sendData();
            // alert("Check your emails !");

        } catch (error) {
            console.log(error);
            alert("Sign up failed :" + error.message);
        } finally {
        }
    };

    const sendData = async () => {
        // Perform validation
        if (!name || !phone || !email || !password) {
            Alert.alert('Validation Error', 'All fields are required');
            return;
        }

        // else if (!/^\d+$/.test(Age)) {
        //     Alert.alert('Validation Error', 'Age must be a valid number');
        //     return;
        // }

        else if (!/^\d{10}$/.test(phone)) {
            Alert.alert('Validation Error', 'Phone number must be 10 digits');
            return;
        }
        else {

            // Send data if validation passes
            try {
                const response = await axios.post('http://localhost:8070/usr/', {
                    name: name,
                    phone: phone,
                    email: email,
                    address: address
                });

                // Handle response here (e.g., show a success message)
                console.log('Data sent successfully:', response.data);
                signUp()
                alert("Successfull", "Signup successfully")
                setName(""),
                    setAddress(""),
                    setEmail(""),
                    setPhone(""),
                    setPassword("")
                navigation.navigate("Login")
            } catch (error) {
                // Handle error here (e.g., show an error message)
                console.error('Error sending data:', error);
                alert("Error", "not save")
            }
        }
    };

    return (
        <View style={[styles.detailser1, { width: '100%', height: '100%', backgroundColor: '#F9F9FA', marginTop: 20 }]}>
            <SafeAreaView>

                <Text style={styles.loginStyle}>Sign-up</Text>

                <KeyboardAvoidingView behavior="padding" style={{ padding: 20, marginTop: 20 }}>
                    <Text style={styles.txt}>Name</Text>

                    <View style={{ width: '100%', height: 45, borderRadius: 9, borderColor: '#ADADAD', borderWidth: 0.5, marginTop: 3 }}>
                        <TextInput

                            style={styles.input}
                            placeholder="Your Full Name"
                            autoCapitalize="none"
                            placeholderTextColor={'#888A8C'}
                            onChangeText={(text) => setName(text)}
                        ></TextInput>
                    </View>



                    <Text style={[styles.txt, { marginVertical: 20 }]}>Email</Text>
                    <View style={{ width: '100%', height: 45, borderRadius: 9, borderColor: '#ADADAD', borderWidth: 0.5, marginTop: 3 }}>

                        <TextInput

                            style={styles.input}
                            placeholder="Your Email Id"
                            autoCapitalize="none"
                            placeholderTextColor={'#888A8C'}
                            onChangeText={(text) => setEmail(text)}
                        ></TextInput>
                    </View>

                    <Text style={[styles.txt, { marginVertical: 20 }]}>Phone</Text>
                    <View style={{ width: '100%', height: 45, borderRadius: 9, borderColor: '#ADADAD', borderWidth: 0.5, marginTop: 3 }}>

                        <TextInput
                            value={phone}
                            style={styles.input}
                            placeholder="phone"
                            autoCapitalize="none"
                            placeholderTextColor={'#888A8C'}
                            onChangeText={(text) => setPhone(text)}
                        ></TextInput>
                    </View>

                    <Text style={[styles.txt, { marginVertical: 20 }]}>Address</Text>
                    <View style={{ width: '100%', height: 45, borderRadius: 9, borderColor: '#ADADAD', borderWidth: 0.5, marginTop: 3 }}>

                        <TextInput

                            style={styles.input}
                            placeholder="address"
                            autoCapitalize="none"
                            placeholderTextColor={'#888A8C'}
                            onChangeText={(text) => setAddress(text)}
                        ></TextInput>
                    </View>

                    <Text style={[styles.txt, { marginVertical: 20 }]}>Password</Text>
                    <View style={{ width: '100%', height: 45, borderRadius: 9, borderColor: '#ADADAD', borderWidth: 0.5, marginTop: 3 }}>

                        <TextInput

                            style={styles.input}
                            placeholder="password"
                            autoCapitalize="none"
                            placeholderTextColor={'#888A8C'}
                            secureTextEntry={true}
                            onChangeText={(text) => setPassword(text)}
                        ></TextInput>
                    </View>



                    <TouchableOpacity style={styles.btnView} onPress={() => { sendData() }}>
                        <Text style={{ fontSize: 16, fontWeight: '600' }}>
                            Signup
                        </Text>

                    </TouchableOpacity>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>

                        <TouchableOpacity  onPress={() => { navigation.navigate('Login') }}>
                            <Text style={{ color: '#569CD6' }}>Back to Login</Text>

                        </TouchableOpacity>
                    </View>



                </KeyboardAvoidingView>

            </SafeAreaView>
        </View>
    )
}

export default Signup

