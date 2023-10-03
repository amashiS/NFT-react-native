import { StyleSheet, Text, View,Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../styles'


const Sidebar = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
   
    const toggleModal = () => {
      setIsModalVisible(!isModalVisible);
    };

    const handleConfirmPayment = () => {
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
      };
    
    

    
  return (
    <View>
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
                    backgroundColor: 'red',
                    padding: 20,
                    borderRadius: 30,
                    position: 'absolute',
                    width: '90%',
                    height: '35%'

                  }}
                >
                  <Text style={styles.bidTxtStyle1}>Are you sure you want to proceed with the payment to purchase this NFT?</Text>

                  <Text style={[styles.nextStyle, { marginTop: 20 }]}>By weerr</Text>
                  <Text style={[styles.nextStyle, { marginTop: 5, fontSize: 50, alignSelf: 'center' }]}>4333</Text>


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

    </View>
  )
}

export default Sidebar

