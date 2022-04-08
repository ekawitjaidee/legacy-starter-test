import React, { Component, useState } from 'react'
import { StyleSheet, ScrollView, ActivityIndicator, View, Text, Pressable } from 'react-native'
import { ThemeProvider, Button, Input, Image } from 'react-native-elements'

import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'

export default function ForwardHistory({ navigation }) {

  return (
    <View>
      <View style={{ weight: "100%", backgroundColor: "#FFFFFF", margin: 15, borderRadius: 10 }}>
        <View style={{ flexDirection: 'row' }}>
          <Pressable
            style={{ width: '50%', height: 60, justifyContent: "center", alignItems: "center", borderRightWidth: 1, borderBottomWidth: 1, borderColor: "#E9E9E9" }}
            onPress={{}}
          >
            <Text style={{}}>สถานะการส่ง</Text>
          </Pressable>
          <Pressable
            style={{ width: '50%', height: 60, justifyContent: "center", alignItems: "center", borderLeftWidth: 1, borderBottomWidth: 1, borderColor: "#E9E9E9" }}
            onPress={{}}
          >
            <Text style={{}}>สถานะการรับ</Text>
          </Pressable>
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
        <View style={{ paddingVertical: 20, paddingHorizontal: 15, flexDirection: "row" }}>
          <View style={{ width: "50%" }}>
            <Text>วันที่</Text>
          </View>
          <View style={{ width: "50%", alignItems: "flex-end" }}>
            <Text>15/09/2020 - 15/12/2020</Text>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: '#E9E9E9',
            borderBottomWidth: 1,
          }}
        />
        <View style={{ paddingVertical: 20, paddingHorizontal: 15, flexDirection: "row" }}>
          <View style={{ width: "50%" }}>
            <Text>ประเภท</Text>
          </View>
          <Pressable style={{ width: "50%", alignItems: "flex-end" }}>
            <Text>ทั้งหมด</Text>
          </Pressable>
        </View>
      </View>
      <View style={{ weight: "100%", marginHorizontal: 15, alignItems: "flex-end" }}>
        <Text>(ทั้งหมด 4 รายการ)</Text>
      </View>
      <ScrollView style={{ weight: "100%", backgroundColor: "#FFFFFF", margin: 15, borderRadius: 10 }}>
        <View style={{ padding: 10, flexDirection: 'row', alignItems: 'stretch' }}>
          <View style={{ paddingHorizontal: 5, width: '20%' }}>
            <Image
              source={{ uri: 'https://cdn-icons-png.flaticon.com/512/219/219986.png' }}
              style={styles.image}
              containerStyle={{}}
            />
          </View>
          <View style={{ width: '60%' }}>
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
        </View>
        <View
          style={{
            borderBottomColor: '#E9E9E9',
            borderBottomWidth: 1,
          }}
        />
        <View style={{flexDirection:"row",padding:15}}>
          <View style={{ width: '60%' }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{width:"15%"}}>
                <Text style={{ fontSize: 12, color: '#808080' }}>ผู้รับ :</Text>
              </View>
              <View style={{width:"40%"}}>
                <Text style={{ flex: 1, fontSize: 13 }} >11000000021</Text>
              </View>
              <View style={{width:"40%"}}>
                <Text style={{ flex: 1, fontSize: 13 }} > ดวงพร ใจกล้า</Text>
              </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{width:"15%"}}>
                <Text style={{ fontSize: 12, color: '#808080' }}>วันที่ : </Text>
              </View>
              <View style={{width:"80%"}}>
                <Text style={{ flex: 1, fontSize: 13 }} >14/01/1999 11:00</Text>
              </View>
            </View>
          </View>
          <View style={{width:"40%",justifyContent:"flex-end",alignItems:"flex-end"}}>
            <Text style={{color:"#97D700"}}>ส่งสำเร็จ</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1
  },
})