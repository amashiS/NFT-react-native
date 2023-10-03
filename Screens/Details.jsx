import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Modal, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../styles'
import menu from '../assets/Home/menu.png'
import notification from '../assets/Home/notification.png'
import crypto2 from '../assets/Home/crypto2.jpeg'
import eth from '../assets/Home/eth.png'
import bid from '../assets/Details/bid.png'
import time from '../assets/Details/time.png'
import back from '../assets/Details/back.png'
import ss from '../assets/Home/ss.png'
import wallet from '../assets/Details/wallet.png'
import cryptowallet from '../assets/Details/cryptowallet.png'
import { useNavigation, useRoute } from '@react-navigation/native'
import data from '../data.json'
import axios from 'axios'






const Details = () => {
  const [select, setSelect] = useState(false)
  const navigation = useNavigation()
  const route = useRoute()
  const { details } = route.params
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleConfirmPayment = async () => {

    try {
      const response = await axios.put(`https://nft-api-ugzq.onrender.com/details/${details._id}`, { availability: "false" });
      console.log('Status updated successfully:', response.data);

      // Perform any further actions after a successful update
      // Close the modal
      toggleModal();

      // Show an alert
      Alert.alert(
        'Payment Successful',
        'Your payment for the NFT has been confirmed.',
        [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed'),
          },
        ],
        { cancelable: false }
      );
    } catch (error) {
      console.error('Error updating status:', error);
    }



  };



  return (
    <View style={[styles.detailser1, { backgroundColor: '#F9F9FA', padding: 20 }]}>
      <SafeAreaView>
        <View style={{ flexDirection: 'row',gap:110, alignItems: 'center', marginTop: 5 }}>

          <TouchableOpacity style={styles.borderstyle} onPress={() => navigation.navigate('Home')}>
            <Image source={back} style={styles.menuIcon1} />
          </TouchableOpacity>

          <Text style={styles.txtStyle}>Details</Text>

         

        </View>

        <View style={styles.detailsStyle}>


          <View>
            <ImageBackground source={{ uri: details.img }} style={styles.cryptoStyle1} imageStyle={styles.cryptoStyle1}>

            </ImageBackground>

            <View style={{ flexDirection: 'row', padding: 15, gap: 60, marginTop: 3 }}>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 15 }}>

                <View>
                  <Image source={bid} style={styles.bidStyle} />

                </View>

                <View style={{ gap: 5 }}>
                  <View>
                    <Text style={styles.bidTxtStyle}>Highest Bid</Text>
                  </View>
                  <View>
                    <Text style={styles.bidTxtStyle1}>${details.best}</Text>

                  </View>

                </View>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>

                <View>
                  <Image source={time} style={styles.bidStyle} />

                </View>

                <View style={{ gap: 5 }}>
                  <View>
                    <Text style={styles.bidTxtStyle}>Ending In</Text>
                  </View>
                  <View>
                    <Text style={styles.bidTxtStyle1}>{details.end}</Text>

                  </View>

                </View>
              </View>






            </View>
          </View>






        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30 }}>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
            <View style={styles.outline}>
              <Image source={{ uri: details.img1 }} style={styles.outline} />
            </View>

            <View>
              <Text style={styles.bidTxtStyle1}>{details.txt1}</Text>
              <Text style={[styles.nextStyle, { marginTop: 5 }]}>Bid placed by</Text>


            </View>
          </View>

          {

            select == true ? (
              <View>
                <TouchableOpacity style={[styles.flwSyle, { opacity: 0.7 }]} >
                  <Text style={styles.bidTxtStyle1}>Following</Text>

                </TouchableOpacity>
              </View>

            ) : (
              <View>
                <TouchableOpacity style={styles.flwSyle} onPress={() => { setSelect(!select) }}>
                  <Text style={styles.bidTxtStyle1}>Follow</Text>

                </TouchableOpacity>
              </View>

            )
          }



        </View>

        <TouchableOpacity style={styles.btn1} onPress={toggleModal} >
          <Text style={styles.swipeTxt}>Buy</Text>
        </TouchableOpacity>

       
            <Modal
              animationType="slide"
              transparent={true}
              visible={isModalVisible}
              onRequestClose={toggleModal}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center', // Align the modal to the bottom
                  backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
                  alignItems: 'center'
                }}
              >
                <View
                  style={{
                    backgroundColor: 'white',
                    padding: 20,
                    borderRadius: 30,
                    position: 'absolute',
                    width: '90%',
                    height: '35%'

                  }}
                >
                  <Text style={styles.bidTxtStyle1}>Are you sure you want to proceed with the payment to purchase this NFT?</Text>

                  <Text style={[styles.nextStyle, { marginTop: 20 }]}>By {details.txt1}</Text>
                  <Text style={[styles.nextStyle, { marginTop: 5, fontSize: 50, alignSelf: 'center' }]}>${details.best}</Text>


                  <View style={{ marginTop: 30, flexDirection: 'row', justifyContent: 'center', gap: 40, alignItems: 'center' }}>


                    <TouchableOpacity style={{ padding: 10, paddingHorizontal: 20, backgroundColor: 'white', borderRadius: 30, borderWidth: 2, borderColor: '#BCED63' }} onPress={toggleModal} >
                      <Text style={[styles.txtStyle, { color: '#000', fontWeight: '500' }]}>Dismiss</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ padding: 10, paddingHorizontal: 20, backgroundColor: '#BCED63', borderRadius: 30, borderWidth: 2, borderColor: '#000' }} onPress={handleConfirmPayment} >
                      <Text style={[styles.txtStyle, { color: '#000' }]}>Confirm</Text>
                    </TouchableOpacity>

                  </View>

                </View>

                {/* Add a transparent overlay to close the modal when tapped outside */}
                <TouchableOpacity
                  style={{ flex: 1 }}
                  activeOpacity={1}
                  onPress={toggleModal}
                />
              </View>
            </Modal>

         








      </SafeAreaView>
    </View>
  )
}

export default Details

