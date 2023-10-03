import { Image, SafeAreaView, ScrollView, Button, StyleSheet, Text, TouchableOpacity, View, Modal, Animated } from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from '../styles'
import menu from '../assets/Home/menu.png'
import user from '../assets/Home/user.png'
import crypto2 from '../assets/Home/crypto2.jpeg'
import crypto3 from '../assets/Home/crypto3.jpeg'
import crypto5 from '../assets/Home/crypto5.jpeg'
import ss from '../assets/Home/ss.png'
import home from '../assets/Home/home.png'
import collection from '../assets/Home/collection.png'
import eth from '../assets/Home/eth.png'
import s3 from '../assets/Home/s3.avif'
import { useNavigation } from '@react-navigation/native'
import box from '../box.json'
import axios from 'axios'
import cryptowallet from '../assets/Details/cryptowallet.png'



const Home = () => {
    const [click, setClick] = useState('Drop Price')
    const navigation = useNavigation()
    const [nftData, setNftData] = useState([])
    const [filterData, setFilterData] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [select, setSelect] = useState()

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    const slideAnimation = new Animated.Value(0);

    const openModal = () => {
        setIsModalVisible(true);
        Animated.timing(slideAnimation, {
            toValue: 1,
            duration: 300, // Adjust the duration as needed
            useNativeDriver: false, // Required for layout animations
        }).start();
    };

    const closeModal = () => {
        Animated.timing(slideAnimation, {
            toValue: 0,
            duration: 300, // Adjust the duration as needed
            useNativeDriver: false, // Required for layout animations
        }).start(() => setIsModalVisible(false));
    };



    const getData = async () => {
        try {
            const response = await axios.get('https://nft-api-ugzq.onrender.com/details/')
            setNftData(response.data);

            const filterResult = response.data.filter(
                item => item.cat.toLowerCase().includes(click.toLowerCase()) && item.availability == 'true'
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

    }, [nftData, click])


    const closeBtn = (enss) => {

        closeModal(enss)




    }

    const Nav = (props) => {
        return (
           
                <TouchableOpacity style={{ width: 200, height: 80, alignItems: 'center', gap: 30, flexDirection: 'row' }}
                onPress={() => {
                    closeModal(); // Call the closeModal function to close the modal
                    navigation.navigate(props.title); // Navigate to the desired screen
                  }}
                    >

                    <Image source={props.img} style={styles.menuIcon4} />
                    <Text style={styles.bidTxtStyle1}>{props.title}</Text>


                </TouchableOpacity>


           
        )
    }

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

                    <TouchableOpacity style={styles.borderstyle} onPress={openModal}>
                        <Image source={menu} style={styles.menuIcon} />
                    </TouchableOpacity>

                    <Modal visible={isModalVisible} animationType="none" transparent={true}>
                        <Animated.View
                            style={{
                                flex: 1,
                                justifyContent: 'flex-start',
                                alignItems: 'flex-start',
                                transform: [
                                    {
                                        translateX: slideAnimation.interpolate({
                                           inputRange: [0, 1],
                                            outputRange: [0, 60], // Adjust the slide distance as needed
                                        }),
                                    },
                                ],
                            }}
                        >
                            <View
                                style={{
                                    backgroundColor: 'white',
                                    padding: 20,
                                    borderRadius: 10,
                                    position: 'absolute',
                                    width: '60%',
                                    height: '100%',
                                    zIndex: 10,
                                    paddingTop: 100,





                                }}
                            >

                                <Nav title={'Home'} img= {home} />
                                <Nav title={'Collection'} img={collection}  />
                                <Nav title={'Wallet'} img={cryptowallet} />
                                <Nav title={'User'} img={user} />



                                <TouchableOpacity style={{ alignItems: 'center', marginTop: 200 }} onPress={closeModal}>
                                    <Text style={[styles.bidTxtStyle1, { color: '#007AFF' }]}>Close</Text>


                                </TouchableOpacity>



                            </View>
                            <TouchableOpacity onPress={closeModal}
                                style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
                                    padding: 20,
                                    borderRadius: 10,
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0

                                }}>

                            </TouchableOpacity>
                        </Animated.View>
                    </Modal>



                    <Text style={styles.txtStyle}>Home</Text>

                    <TouchableOpacity style={styles.borderstyle} >
                        <Image source={user} style={styles.menuIcon1} />
                    </TouchableOpacity>


                </View>

                <Text style={styles.discoverStyle}>Discover Now</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, paddingHorizontal: 5 }}>

                    <Choose category={'Drop Price'} />
                    <Choose category={'Popular'} />
                    <Choose category={'Following'} />


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

                                            <Text style={styles.title1}>{details.txt1}</Text>
                                        </View>

                                    </View>

                                    <View style={styles.outline}>
                                        <Image source={{ uri: details.img1 }} style={styles.outline} />
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

export default Home

