import React, { Component, useState } from 'react'
import { StyleSheet, ScrollView, ActivityIndicator, View, Text, TouchableOpacity } from 'react-native'
import { ThemeProvider, Button, Input, Image } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

import ScanButton from '../component/scan-button'

export default function Pickup({ navigation }) {
  const [page, setPage] = useState(0)
  return (
    <ThemeProvider theme={theme}>
      <View style={{ marginTop: 10, paddingHorizontal: 10 }}>
        <View style={{ backgroundColor: "#FFFFFF", borderRadius: 10 }} elevation={10}>
          <View style={{ padding: 10, flexDirection: 'row', alignItems: 'stretch' }}>
            <View style={{ paddingHorizontal: 5, width: '13%' }}>
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/219/219986.png' }}
                style={styles.image}
                containerStyle={{}}
              />
            </View>
            <View style={{ width: '40%' }}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View>
                  <Text style={{ fontSize: 12, color: '#808080' }}>ผู้ส่ง : </Text>
                </View>
                <View style={{}}>
                  <Text style={{ flex: 1, fontSize: 13 }} >ดวงพร ใจกล้า</Text>
                </View>
              </View>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <View>
                  <Text style={{ fontSize: 12, color: '#808080' }}>วันที่ : </Text>
                </View>
                <View>
                  <Text style={{ flex: 1, fontSize: 13 }} >14/01/1999 11:00</Text>
                </View>
              </View>
            </View>
            <View style={{ borderLeftWidth: 1, borderColor: '#E9E9E9', marginVertical: 5, width: '1%' }}></View>
            <View style={{ paddingLeft: 5, width: '46%' }}>
              <ScanButton buttonWidth={'100%'} />
            </View>
          </View>
        </View>
        <View style={{ marginTop: 15 }}>
          <Text style={{ alignSelf: "flex-end" }}>(สินค้าที่ส่งมาทั้งหมด 4 รายการ)</Text>
        </View>
        <View style={{ backgroundColor: "#FFFFFF", borderRadius: 10, marginTop: 10 }}>
          <View style={{ padding: 10, flexDirection: 'row', alignItems: 'stretch' }}>
            <View style={{ paddingHorizontal: 5, width: '20%' }}>
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/219/219986.png' }}
                style={styles.image2}
                containerStyle={{}}
              />
            </View>
            <View style={{ width: '50%' }}>
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <Text style={{ fontSize: 13, color: '#000000' }}>CODE : TH1054</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <View>
                  <Text style={{ fontSize: 13, color: '#000000' }}>เอฟ แอล กลิ่นสับปะรดมะนาว </Text>
                </View>
              </View>
              <View style={{ paddingTop: 6, flexDirection: 'row' }}>
                <View>
                  <Text style={{ fontSize: 12, color: '#808080' }}>Serial Number : 129488800002 </Text>
                </View>
              </View>
            </View>
            <View style={{ width: '30%' , justifyContent:'center'}}>
              <Icon name="check-circle" size={40} color='#CCCCCC' style={{ alignSelf: "center" }} />
            </View>
          </View>
        </View>
      </View>
    </ThemeProvider>
  );
}

const theme = {
  Button: {
    raised: true,
  }
}

const styles = StyleSheet.create({

  senderTab: {
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    borderRadius: 3
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 30,
    borderColor: '#000000',
    borderWidth: 1
  },
  image2: {
    width: 50,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1
  }
})