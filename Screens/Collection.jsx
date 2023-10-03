import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import back from '../assets/Details/back.png'
import cryptowallet from '../assets/Details/cryptowallet.png'
import { styles } from '../styles'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import eth from '../assets/Home/eth.png'
import uss from '../assets/User/uss.webp'




const Collection = () => {
    const navigation = useNavigation()
    const [nftData, setNftData] = useState([])
    const [filterData, setFilterData] = useState([])

    const getData = async () => {
        try {
            const response = await axios.get('https://nft-api-ugzq.onrender.com/details/')
            setNftData(response.data);

            const filterResult = response.data.filter(
                item => item.cat.toLowerCase && item.availability == 'false'
            );
            setFilterData(filterResult);
            // console.log(filterResult)


        }
        catch (error) {
            // Handle error here (e.g., show an error message)
            console.error('Error sending data:', error);
            alert("Error", "not save")
        }

    }
    useEffect(() => {
        getData()

    }, [nftData])

    return (
        <View style={[styles.detailser1, { backgroundColor: '#F9F9FA', padding: 20,width:'100%',height:'100%' }]}>
            <SafeAreaView>
                <View style={{ flexDirection: 'row', gap: 110, alignItems: 'center', marginTop: 5 }}>

                    <TouchableOpacity style={styles.borderstyle} onPress={() => navigation.navigate('Home')}>
                        <Image source={back} style={styles.menuIcon1} />
                    </TouchableOpacity>

                    <Text style={styles.txtStyle}>Collection</Text>


                </View>
                <ScrollView showsVerticalScrollIndicator='false' >

                    {
                        filterData.map(details =>


                            <View  key={details.id} style={styles.includeStyle}>
                                <TouchableOpacity onPress={() => { navigation.navigate('Details', { details }) }}>
                                    <Image source={{ uri: details.img }} style={styles.cryptoStyle} />

                                </TouchableOpacity>

                                <View style={{ flexDirection: 'row', padding: 20, justifyContent: 'space-between', alignItems: 'center' }}>
                                    <View style={{ gap: 6 }}>
                                        <View>
                                            <Text style={styles.title}>{details.txt}</Text>
                                        </View>

                                        <View>

                                            <Text style={styles.title1}>AmashiS</Text>
                                        </View>

                                    </View>

                                    <View style={styles.outline}>
                                        <Image source={uss} style={styles.outline} />
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
                                                <Text>{details.bid}</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.nextStyle} >Best Offer</Text>

                                            </View>

                                        </View>
                                    </View>


                                </View>


                            </View>
                        )
                    }





                    <View style={{ height: 150 }} />

                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default Collection

