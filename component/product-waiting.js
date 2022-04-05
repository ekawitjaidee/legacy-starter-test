import React, { Component } from 'react'
import { StyleSheet, ScrollView, ActivityIndicator, View, Text } from 'react-native'
import { ThemeProvider, Button, Input, Image } from 'react-native-elements'
import Icon2 from 'react-native-vector-icons/Entypo'


export default function ProductWaiting() {
  return (
        <View style={style.productwaiting}>
          <View style={{ flexDirection: 'row', alignItems: 'stretch' }}>
            <View style={{ paddingHorizontal: 5, width: '13%' }}>
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/219/219986.png' }}
                style={style.image}
                containerStyle={{}}
              />
            </View>
            <View style={{ paddingHorizontal: 5, width: '87%' }}>
              <Text style={{ fontSize: 12 ,color:'#808080'}}>ผู้ส่ง :</Text>
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'space-between', justifyContent: 'space-between' }}>
                <View style={{}}>
                  <Text style={{ flex: 1, fontSize: 13 ,fontWeight: "bold"}} >ดวงพร ใจกล้า</Text>
                </View>
                <View style={{}}>
                  <Text style={{ flex: 1, fontSize: 9, justifyContent: 'flex-end',color:'#CCCCCC' }} >(4 รายการ)</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ paddingTop: 20, flexDirection: 'row', alignItems: 'stretch' }}>
            <View style={{ flex: 1, flexDirection: 'row',paddingHorizontal: 5, width: '40%' , alignItems: 'space-between', justifyContent: 'space-between'}}>
              <Text style={{color:'#808080'}}>วันที่ส่ง :</Text>
              <Text>14/01/1999</Text>
              <Text>11:00</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row',paddingHorizontal: 5, width: '60%',justifyContent:'flex-end'}}>
              <Text style={{color:'#97D700',textAlign:'center'}}>รับเข้าสินค้า </Text>
              <Icon2 name='chevron-thin-right' size={15} color='#97D700'/>
            </View>
          </View>
        </View>
  );
}

const style = StyleSheet.create({

  productwaiting: {
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    padding: 10,
    borderRadius:3
  },
 image: {
    width: 35,
    height: 35,
    borderRadius: 30,
    borderColor: '#000000',
    borderWidth: 1
  }
})