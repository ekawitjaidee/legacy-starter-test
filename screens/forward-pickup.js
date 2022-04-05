import React, { Component } from 'react'
import { StyleSheet, ScrollView, ActivityIndicator, View, Text } from 'react-native'
import { ThemeProvider, Button, Input, Image } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Entypo'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'

import ProductWaiting from '../component/product-waiting'
import ScanButton from '../component/scan-button'

export default function ForwardPickup() {
  return (
    <ThemeProvider theme={theme}>
      <ScrollView style={style.container}>
        <View style={{ alignItems: 'center' }}>
        <ScanButton/>
        </View>
        <Text style={{ marginTop: 15 ,color:'#808080'}}>รายการสินค้ารอรับเข้า</Text>
        <ProductWaiting />
      </ScrollView>
    </ThemeProvider>
  );
}


const theme = {
  Button: {
    raised: true,
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  preloader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
})