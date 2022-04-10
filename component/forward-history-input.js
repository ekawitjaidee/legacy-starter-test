import React, { Component, useState } from 'react'
import { StyleSheet, ScrollView, ActivityIndicator, View, Text, Pressable, Picker } from 'react-native'
import { ThemeProvider, Button, Input, Image } from 'react-native-elements'

import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'



export default function HistoryInput({ status, setStatus }) {

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        {status == "sending" ? (
          <>
            <Pressable
              style={[styles.statusButtonOnclick, styles.TopLeftAngleRadius]}
              onPress={() => setStatus('sending')}
            >
              <Text style={{ color: "#FFFFFF" }}>สถานะการส่ง</Text>
            </Pressable>
            <Pressable
              style={[styles.statusButton, styles.TopRightAngleRadius]}
              onPress={() => setStatus('receive')}
            >
              <Text style={{ color: "#000000" }}>สถานะการรับ</Text>
            </Pressable>
          </>
        ) : (
            <>
              <Pressable
                style={[styles.statusButton, styles.TopLeftAngleRadius]}
                onPress={() => setStatus('sending')}
              >
                <Text style={{ color: "#000000" }}>สถานะการส่ง</Text>
              </Pressable>
              <Pressable
                style={[styles.statusButtonOnclick, styles.TopRightAngleRadius]}
                onPress={() => setStatus('receive')}
              >
                <Text style={{ color: "#FFFFFF" }}>สถานะการรับ</Text>
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
      <View style={ styles.hr }/>
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
        {status == "sending" ? (
          <Picker style={{ height: 20, width: "50%", alignItems: "flex-end" }}>
            <Picker.Item label="ทั้งหมด" value="ทั้งหมด" />
            <Picker.Item label="ส่งสำเร็จ" value="ส่งสำเร็จ" />
            <Picker.Item label="ยังไม่รับ" value="ยังไม่รับ" />
            <Picker.Item label="ผู้รับปฎิเสธ" value="ผู้รับปฎิเสธ" />
          </Picker>
        ) : (
            <Picker style={{ height: 20, width: "50%", alignItems: "flex-end" }}>
              <Picker.Item label="ทั้งหมด" value="ทั้งหมด" />
              <Picker.Item label="รับแล้ว" value="รับแล้ว" />
              <Picker.Item label="ปฎิเสธการรับ" value="ปฎิเสธการรับ" />
            </Picker>
          )}
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#FFFFFF", 
    margin: 15, 
    borderRadius: 10
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
  TopLeftAngleRadius: {
    borderTopLeftRadius: 10
  },
  TopRightAngleRadius: {
    borderTopRightRadius: 10
  },
  hr:{
    borderBottomColor: '#E9E9E9',
    borderBottomWidth: 1,
    marginVertical: 10
  }
})