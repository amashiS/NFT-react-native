import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from '../styles'
import crypto from '../assets/GetStarted/crypto.png'
import { useNavigation } from '@react-navigation/native'


const GetStarted = () => {
    const navigation = useNavigation()
    return (

        <View style={styles.container1}>
            <Image source={crypto} style={[styles.cryptoStyle,{height:500}]} />
            <Text style={styles.nftStyle}>Explore the best </Text>
            <Text style={[styles.nftStyle, { marginTop: 5 }]}>NFT Market</Text>
            <Text style={styles.description}>A credible and axellent marketplace for non-fungiable token</Text>

            <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate('Home')}>
                <Text style={styles.swipeTxt}>Get Started</Text>
            </TouchableOpacity>

        </View>
    )
}

export default GetStarted

