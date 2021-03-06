import React, { Component } from 'react'
import { StyleSheet, ScrollView, ActivityIndicator, View, Text, TouchableOpacity } from 'react-native'
import { ThemeProvider, Button, Input, Image } from 'react-native-elements'
import Icon2 from 'react-native-vector-icons/Entypo'


export default function ProductWaiting({ navigation , name, date, time, listcount }) {
  return (
    <View style={styles.productwaiting}>
      <View style={styles.topbody}>
        <View style={{ paddingHorizontal: 5, width: '13%' }}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/219/219986.png' }}
            style={styles.image}
          />
        </View>
        <View style={{ paddingHorizontal: 5, width: '87%' }}>
          <Text style={{ fontSize: 12, color: '#808080' }}>ผู้ส่ง :</Text>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'space-between', justifyContent: 'space-between' }}>
            <View>
              <Text style={{ flex: 1, fontSize: 13, fontWeight: "bold" }} >{name}</Text>
            </View>
            <View>
              <Text style={{ flex: 1, fontSize: 9, justifyContent: 'flex-end', color: '#CCCCCC' }} >({listcount} รายการ)</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.hr}/>
      <View style={styles.bottombody}>
        <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 5, width: '40%', alignItems: 'space-between', justifyContent: 'space-between' }}>
          <Text style={{ color: '#808080' }}>วันที่ส่ง :</Text>
          <Text>{date}</Text>
          <Text>{time}</Text>
        </View>
        <TouchableOpacity style={{flexDirection: 'row',flex: 1,  paddingHorizontal: 5, width: '60%', justifyContent: 'flex-end'}} onPress={() => navigation.navigate("Pickup")}>
            <Text style={{ color: '#97D700', textAlign: 'center' }}>รับเข้าสินค้า </Text>
            <Icon2 name='chevron-thin-right' size={15} color='#97D700' style={{alignSelf:"center"}} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  productwaiting: {
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
  topbody:{
    padding: 10, 
    flexDirection: 'row', 
    alignItems: 'stretch'
  },
  bottombody:{
    padding: 10, 
    flexDirection: 'row', 
    alignItems: 'stretch'
  },
  hr:{
    borderBottomColor: '#E9E9E9',
    borderBottomWidth: 1,
  }
})