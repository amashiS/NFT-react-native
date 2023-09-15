import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
import { useNavigation } from '@react-navigation/native'
import data from '../data.json'






const Details = () => {
  const [select, setSelect] = useState(false)
  const navigation = useNavigation()

  return (
    <View style={[styles.container1, { backgroundColor: '#F9F9FA' }]}>
      <SafeAreaView>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 5 }}>

          <TouchableOpacity style={styles.borderstyle}>
            <Image source={menu} style={styles.menuIcon} />
          </TouchableOpacity>

          <Text style={styles.txtStyle}>Details</Text>

          <TouchableOpacity style={styles.borderstyle}>
            <Image source={notification} style={styles.menuIcon1} />
          </TouchableOpacity>


        </View>

        <View style={styles.detailsStyle}>

          {data.map(contain => (

            <View>
              <ImageBackground source={{uri:contain.image}} style={styles.cryptoStyle1} imageStyle={styles.cryptoStyle1}>

                <TouchableOpacity style={styles.borderStyle} onPress={() => navigation.navigate('Home')}>
                  <Image source={back} style={styles.bckStyle} />
                </TouchableOpacity>

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
                      <Text style={styles.bidTxtStyle1}>{contain.high}</Text>

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
                      <Text style={styles.bidTxtStyle1}>{contain.end}</Text>

                    </View>

                  </View>
                </View>






              </View>
            </View>

          )

          )}




        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30 }}>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
            <View style={styles.outline}>
              <Image source={ss} style={styles.outline} />
            </View>

            <View>
              <Text style={styles.bidTxtStyle1}>HomelessPerson</Text>
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

        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.swipeTxt}>Place bid</Text>
        </TouchableOpacity>




      </SafeAreaView>
    </View>
  )
}

export default Details

