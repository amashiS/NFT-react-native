import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../styles'
import bck from '../assets/Wallet/bck.png'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'


const Wallet = () => {
    const navigation = useNavigation()
    const [touch, setTouch] = useState('Deposit')
    const [receive, setReceive] = useState([])
    const [type, setType] = useState([])

    const getData = async () => {
        try {
            const response = await axios.get('http://localhost:8070/trc/')
            setReceive(response.data);
            console.log(response.data)


            const filterResult = response.data.filter(
                item => item.type.toLowerCase().includes(touch.toLowerCase())

            );
            setType(filterResult);
            console.log(filterResult)



        }
        catch (error) {
            console.error('Error sending data:', error);
        }

    }
    useEffect(() => {
        getData()

    }, [touch])


    const Click = (props) => {
        return (
            <View>
                {

                    touch == props.type ? (

                        <TouchableOpacity style={styles.ViewStyle1}>
                            <Text style={styles.nameStyle2}>{props.type}</Text>
                        </TouchableOpacity>


                    ) : (

                        <TouchableOpacity style={styles.ViewStyle} onPress={() => setTouch(props.type)}>
                            <Text style={styles.nameStyle1}>{props.type}</Text>
                        </TouchableOpacity>

                    )
                }

            </View>

        )
    }

    return (
        <View style={[styles.container1, { backgroundColor: '#2D2D2D', padding: -20 }]}>
            <SafeAreaView>

                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 115, marginTop: 10 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={bck} style={[styles.menuIcon3, { marginLeft: 10 }]} />
                    </TouchableOpacity>

                    <Text style={styles.nameStyle}>Amashi Silva</Text>


                </View>


                <Text style={styles.valueStyle}>$27,298</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 30, marginTop: 20, justifyContent: 'center' }}>

                    <Click type={'Deposit'} />
                    <Click type={'Withdraw'} />

                </View>

                <ScrollView showsVerticalScrollIndicator='false' style={styles.dataStyle}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={styles.assestStyle}>Assests</Text>
                        <Text style={styles.valueTxt} >Value</Text>


                    </View>



                    <View style={styles.incideStyle}>

                        {
                            type.map(data => (
                                <View>
                                    <View key={data.id} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10, marginBottom: 10 }}>

                                        <Image source={{ uri: data.img }} style={styles.bitIcon} />

                                        <View>
                                            <Text style={styles.bitStyle}>{data.coin}</Text>
                                            <Text style={styles.numStyle}>{data.dollar}</Text>
                                        </View>

                                        <View>
                                            <Text style={[styles.numStyle, { color: parseInt(data.percentage) < 0 ? 'red' : 'green', marginBottom: 7 }]}>
                                                {data.percentage}
                                            </Text>
                                            <Text style={[styles.numStyle, { marginLeft: 5 }]}>{data.number}</Text>

                                        </View>




                                    </View>

                                    <View style={{ paddingLeft: 40, margin: 5 }}>
                                        <View style={styles.ruler} />
                                    </View>

                                </View>



                            ))
                        }


                    </View>
                    <View style={{ padding: 250 }}></View>

                </ScrollView>





            </SafeAreaView>
        </View>
    )
}

export default Wallet

