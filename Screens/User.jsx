import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import back from '../assets/Details/back.png'
import { useNavigation } from '@react-navigation/native'
import down from '../assets/User/down.png'
import right from '../assets/User/right.png'
import uss from '../assets/User/uss.webp'
import crisis from '../assets/User/crisis.png'
import crisis1 from '../assets/User/crisis1.png'
import password from '../assets/User/password.png'
import help from '../assets/User/help.png'
import n from '../assets/User/n.png'


const User = () => {
    const navigation = useNavigation()

    return (
        <View style={[styles.detailser1, {width:'100%',height:'100%', backgroundColor: '#fff', padding: 20 }]}>
            <SafeAreaView>
                <View style={{ flexDirection: 'row', gap: 110, alignItems: 'center', marginTop: 5 }}>

                    <TouchableOpacity style={styles.borderstyle} onPress={() => navigation.navigate('Home')}>
                        <Image source={back} style={styles.menuIcon1} />
                    </TouchableOpacity>

                    <Text style={styles.txtStyle}>User</Text>


                </View>
                <View style={styles.UserStyle1}>
                    <View style={styles.UserIStyle}>
                        <Image source={uss} style={styles.usStyle} /></View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                        <Text style={styles.nameStyle}>AmashiS  </Text>
                    
                        <Image source={down} style={styles.DoneStyle} />
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: -7 }}>
                        <Text style={styles.mailStyle}>amashisilva@gmail.com</Text>

                    </View>

                    <View style={styles.dataStyle}>

                        <View style={styles.dataStyle1}>
                            <Text style={styles.data}>Email</Text>
                            <TouchableOpacity>
                                <Image source={right} style={styles.ArrowStyle} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.line} />

                        <View style={styles.dataStyle2}>
                            <Text style={styles.data}>Country</Text>
                            <TouchableOpacity>
                                <Image source={right} style={styles.ArrowStyle} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.line} />




                        <View style={styles.dataStyle3}>
                            <Text style={styles.data}>Telephone</Text>
                            <TouchableOpacity>
                                <Image source={right} style={styles.ArrowStyle} />
                            </TouchableOpacity>
                        </View>




                    </View>

                    <View>

                        <View style={styles.secoundStack}>
                            <View style={styles.reusable}>
                                <Image source={crisis1} style={styles.Icon} />

                                <Text style={styles.data}>   Crisis support</Text>
                            </View>

                            <TouchableOpacity>
                                <Image source={right} style={styles.ArrowStyle1} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.NewDataStyle}>

                            <View style={styles.dataStyle1}>
                                <View style={styles.reusable}>
                                    <Image source={password} style={styles.Icon} />

                                    <Text style={styles.data}>   Change password</Text>
                                </View>
                                <TouchableOpacity>
                                    <Image source={right} style={styles.ArrowStyle1} />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.dataStyle2}>
                                <View style={styles.reusable}>
                                    <Image source={help} style={styles.Icon} />

                                    <Text style={styles.data}>   Help</Text>
                                </View>
                                <TouchableOpacity>
                                    <Image source={right} style={styles.ArrowStyle1} />
                                </TouchableOpacity>
                            </View>




                            <View style={styles.dataStyle3}>
                                <View style={styles.reusable}>
                                    <Image source={n} style={styles.Icon} />

                                    <Text style={styles.data}>   NFT </Text>
                                </View>
                                <TouchableOpacity>
                                    <Image source={right} style={styles.ArrowStyle1} />
                                </TouchableOpacity>
                            </View>
                        </View>




                    </View>

                </View>
            </SafeAreaView>
        </View>
    )
}

export default User
const styles = StyleSheet.create({
    UserStyle: {
        padding: 20,
     

    },

    txtStyle: {
        fontSize: 15,
        fontWeight: '600'

    },

    borderstyle: {
        width: 40,
        height: 40,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#E6E5E8',
        justifyContent: 'center',
        alignItems: 'center'

    },

    menuIcon1: {
        width: 18,
        height: 18

    },

    UserTxtStyle: {
        margin: 14,
        textAlign: "center",
        fontSize: 19,
        fontWeight: 700
    },

    UserIStyle: {
        width: 110,
        height: 110,
        alignSelf: 'center',
        marginVertical: 10


    },

    usStyle: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
        borderWidth: 0.5,
        borderColor: '#C4D8EC'

    },

    nameStyle: {
        fontSize: 18,
        marginVertical: 1,
        color: '#000',
        marginBottom: 5,
        fontWeight: '600'
    },

    mailStyle: {
        fontSize: 14,
        marginVertical: 6,
        color: '#000',
        opacity:0.6
    },

    DoneStyle: {
        width: 15,
        height: 15
    },

    NewDataStyle: {
        width: '100%',
        borderRadius: 20,
        marginTop: 5,


    },

    dataStyle: {
        marginVertical: 30,
        width: '100%',
        borderRadius: 20
    },

    dataStyle1: {
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#DEDEDE',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 18

    },

    secoundStack: {
        width: '100%',
        backgroundColor: '#DEDEDE',
        alignItems: 'center',
        marginVertical: -13,
        borderRadius: 20,
        flexDirection: 'row',
        padding: 18,
        justifyContent: 'space-between',
        marginBottom: 25,
        marginTop: 2
    },

    dataStyle2: {
        width: '100%',
        backgroundColor: '#DEDEDE',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 15

    },

    dataStyle3: {
        width: '100%',
        backgroundColor: '#DEDEDE',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 18

    },

    line: {
        width: '100%',
        height: 1,
        backgroundColor: '#fff',
        opacity:0.1

    },

    ArrowStyle: {
        width: 12,
        height: 12
    },

    ArrowStyle1: {
        width: 12,
        height: 12,
        justifyContent: 'flex-end'
    },

    data: {
        color: '#000',
        fontSize: 14,
        fontWeight: 500,
        opacity: 0.6
    },

    Icon: {
        width: 22,
        height: 22,
    },
    
    reusable: {
        flexDirection: 'row',
        alignItems: 'center',
        gap:10

    },

    data:{
        color:'#000',
    }
})

