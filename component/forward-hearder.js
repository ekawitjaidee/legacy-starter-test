import React, { Component, useState } from 'react'
import { StyleSheet, ScrollView, ActivityIndicator, View, Text, TouchableOpacity } from 'react-native'
import { ThemeProvider, Button, Input, Image } from 'react-native-elements'



export default function ForwardHeader({ navigation, page }) {

  const [selectpage, setSelectpage] = useState(0)
  if (page == 0 ){
    return (
      <View>
        <View style={style.headerbar}>
          <TouchableOpacity style={style.selected} >
            <Text style={{ color: "#97D700" }}>รับสินค้า</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.unselectedmid} onPress={() => navigation.navigate('ForwardSending')}>
            <Text>ส่งต่อสินค้า</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.unselected} onPress={() => navigation.navigate('ForwardHistory')}>
            <Text>ประวัติ</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }else if(page ==1){
    return (
      <View>
        <View style={style.headerbar}>
          <TouchableOpacity style={style.unselected} onPress={() => navigation.navigate('ForwardPickup')}>
            <Text>รับสินค้า</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.selectedmid} >
            <Text style={{ color: "#97D700" }}>ส่งต่อสินค้า</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.unselected} onPress={() => navigation.navigate('ForwardHistory')}>
            <Text>ประวัติ</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  else{
    return (
      <View>
        <View style={style.headerbar}>
          <TouchableOpacity style={style.unselected} onPress={() => navigation.navigate('ForwardPickup')}>
            <Text>รับสินค้า</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.unselectedmid} onPress={() => navigation.navigate('ForwardSending')}>
            <Text>ส่งต่อสินค้า</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.selected} >
            <Text style={{ color: "#97D700" }}>ประวัติ</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  headerbar: {
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
    flexDirection: 'row',

  },
  selected:{
    width: '30%', 
    height: 40, 
    alignItems: 'center', 
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#97D700'
  },
  unselected:{
    width: '30%', 
    height: 40, 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  selectedmid:{
    width: '40%', 
    height: 40, 
    alignItems: 'center', 
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#97D700'
  },
  unselectedmid:{
    width: '40%', 
    height: 40, 
    alignItems: 'center', 
    justifyContent: 'center' 
  }
})