import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../styles'
import menu from '../assets/Home/menu.png'
import notification from '../assets/Home/notification.png'
import crypto2 from '../assets/Home/crypto2.jpeg'
import crypto3 from '../assets/Home/crypto3.jpeg'
import crypto5 from '../assets/Home/crypto5.jpeg'
import ss from '../assets/Home/ss.png'
import eth from '../assets/Home/eth.png'
import s3 from '../assets/Home/s3.avif'
import { useNavigation } from '@react-navigation/native'
import box from '../box.json'



const Home = () => {
    const [click, setClick] = useState('Drop Price')
    const navigation = useNavigation()

    const Choose = (props) => {
        return (
            <View>
                {
                    click == props.category ? (
                        <TouchableOpacity style={styles.borderstyle2}  >
                            <Text style={{ fontWeight: '500' }}>{props.category}</Text>
                        </TouchableOpacity>


                    )
                        :
                        (
                            <TouchableOpacity style={styles.borderstyle1} onPress={() => setClick(props.category)} >
                                <Text>{props.category}</Text>
                            </TouchableOpacity>


                        )
                }

            </View>

        )
    }


    return (
        <View style={[styles.container1, { backgroundColor: '#F9F9FA' }]}>
            <SafeAreaView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 5 }}>

                    <TouchableOpacity style={styles.borderstyle}>
                        <Image source={menu} style={styles.menuIcon} />
                    </TouchableOpacity>

                    <Text style={styles.txtStyle}>Home</Text>

                    <TouchableOpacity style={styles.borderstyle}>
                        <Image source={notification} style={styles.menuIcon1} />
                    </TouchableOpacity>


                </View>

                <Text style={styles.discoverStyle}>Discover Now</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, paddingHorizontal: 5 }}>

                    <Choose category='Drop Price' />
                    <Choose category='Popular' />
                    <Choose category='Following' />


                </View>
                <ScrollView showsVerticalScrollIndicator='false' >

                    {
                        box.map(details => (

                            <View style={styles.includeStyle}>
                                <TouchableOpacity onPress={() => { navigation.navigate('Details') }}>
                                    <Image source={{ uri: details.img }} style={styles.cryptoStyle} />

                                </TouchableOpacity>

                                <View style={{ flexDirection: 'row', padding: 20, justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View style={{ gap: 6 }}>
                                        <View>
                                            <Text style={styles.title}>{details.title}</Text>
                                        </View>

                                        <View>

                                            <Text style={styles.title1}>{details.title1}</Text>
                                        </View>

                                    </View>

                                    <View style={styles.outline}>
                                        <Image source={{ uri: details.img2 }} style={styles.outline} />
                                    </View>



                                </View>

                                <View style={{ flexDirection: 'row', padding: 15, justifyContent: 'space-between', alignItems: 'center' }}>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 7 }}>

                                        <View>
                                            <Image source={eth} style={styles.ethStyle} />

                                        </View>

                                        <View>
                                            <View>
                                                <Text>{details.vol}</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.nextStyle}>Volume</Text>

                                            </View>

                                        </View>
                                    </View>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 7 }}>

                                        <View>
                                            <Image source={eth} style={styles.ethStyle} />

                                        </View>

                                        <View>
                                            <View>
                                                <Text>{details.floor}</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.nextStyle}>Floor Price</Text>

                                            </View>

                                        </View>
                                    </View>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 7 }}>

                                        <View>
                                            <Image source={eth} style={styles.ethStyle} />

                                        </View>

                                        <View>
                                            <View>
                                                <Text>{details.best}</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.nextStyle} >Best Offer</Text>

                                            </View>

                                        </View>
                                    </View>


                                </View>


                            </View>
                        ))}


                   


                    <View style={{ height: 150 }} />

                </ScrollView>


            </SafeAreaView>
        </View>
    )
}

export default Home

