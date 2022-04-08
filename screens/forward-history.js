import React, { Component, useState } from 'react'
import { StyleSheet, ScrollView, ActivityIndicator, View, Text, Pressable ,Picker} from 'react-native'
import { ThemeProvider, Button, Input, Image } from 'react-native-elements'

import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'

import HistoryItems from '../component/forward-history-items'

export default function ForwardHistory({ navigation }) {

  const [status, setStatus] = useState('sending') //sending,receive


  return (
    <ThemeProvider theme={theme}>
      <View style={{ weight: "100%", backgroundColor: "#FFFFFF", margin: 15, borderRadius: 10 }}>
        <View style={{ flexDirection: 'row' }}>
          {status == "sending" ? (
            <>
              <Pressable
                style={[styles.statusButtonOnclick,styles.TopLeftAngleRadius]}
                onPress={() => setStatus('sending')}
              >
                <Text style={{color:"#FFFFFF"}}>สถานะการส่ง</Text>
              </Pressable>
              <Pressable
                style={[styles.statusButton,styles.TopRightAngleRadius]}
                onPress={() => setStatus('receive')}
              >
                <Text style={{color:"#000000"}}>สถานะการรับ</Text>
              </Pressable>
            </>
          ) : (
            <>
              <Pressable
                style={[styles.statusButton,styles.TopLeftAngleRadius]}
                onPress={() => setStatus('sending')}
              >
                <Text style={{color:"#000000"}}>สถานะการส่ง</Text>
              </Pressable>
              <Pressable
                style={[styles.statusButtonOnclick,styles.TopRightAngleRadius]}
                onPress={() => setStatus('receive')}
              >
                <Text style={{color:"#FFFFFF"}}>สถานะการรับ</Text>
              </Pressable>
            </>
          )}
        </View>
        <View style={{ margin: 10, padding: 10, backgroundColor: "#E9E9E9", flexDirection: "row" }}>
          <Icon name="search" size={20} color='#808080' style={{ width: "10%", alignSelf: "center" }} />
          <Text style={{ width: "80%" }}> รหัส,ชื่อ-นามสกุล,ชื่อสินค้า</Text>
          <View style={{ width: '10%', alignItems: "flex-end" }}>
            <Icon2 name='scan-helper' size={20} color='#808080' />
          </View>
        </View>
        <View
          style={{
            borderBottomColor: '#E9E9E9',
            borderBottomWidth: 1,
            marginVertical: 10
          }}
        />
        <View style={{ paddingVertical: 10, paddingHorizontal: 15, flexDirection: "row" }}>
          <View style={{ width: "50%" }}>
            <Text>วันที่</Text>
          </View>
          <View style={{ width: "50%", alignItems: "flex-end" }}>
            <Text>15/09/2020 - 15/12/2020</Text>
          </View>
        </View>
        <View style={{ paddingVertical: 15, paddingHorizontal: 15, flexDirection: "row" }}>
          <View style={{ width: "50%" }}>
            <Text>ประเภท</Text>
          </View>
          <Picker style={{ height:20,width: "50%", alignItems: "flex-end" }}>
            <Picker.Item label="ทั้งหมด" value="ทั้งหมด" />
          </Picker>
        </View>
      </View>
      <View style={{ weight: "100%", marginHorizontal: 15, alignItems: "flex-end" }}>
        <Text>(ทั้งหมด 4 รายการ)</Text>
      </View>
      <ScrollView>
        <HistoryItems/>
        <HistoryItems/>
        <HistoryItems/>
      </ScrollView>
    </ThemeProvider>
  );
}

const theme = {
  Button: {
    raised: true,
  }
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1
  },
  statusButton: {
    width: '50%',
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#E9E9E9",
  },
  statusButtonOnclick: {
    width: '50%',
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#E9E9E9",
    backgroundColor: "#97D700",

  },
  TopLeftAngleRadius:{
    borderTopLeftRadius: 10
  },
  TopRightAngleRadius:{
    borderTopRightRadius: 10
  }
})