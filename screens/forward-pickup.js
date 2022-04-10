import React, { Component , useState } from 'react'
import { StyleSheet, ScrollView, ActivityIndicator, View, Text , TouchableOpacity } from 'react-native'
import { ThemeProvider, Button, Input, Image } from 'react-native-elements'

import ProductWaiting from '../component/product-waiting'
import ScanButton from '../component/scan-button'

export default function ForwardPickup({ navigation }) {

  return (
      <ScrollView style={styles.container}>
        <View style={styles.buttoncontainer}>
          <ScanButton navigation={navigation} buttonWidth={"50%"}/>
        </View>
        <Text style={styles.headertext}>รายการสินค้ารอรับเข้า</Text>
        <ProductWaiting navigation={navigation} name={'ดวงพร ใจกล้า'} date={'14/01/1999'} time={'11.00'} listcount={'4'} />
        <ProductWaiting name={'ดวงพร ใจกล้า'} date={'14/01/1999'} time={'11.00'} listcount={'4'} />
        <ProductWaiting name={'ดวงพร ใจกล้า'} date={'14/01/1999'} time={'11.00'} listcount={'4'} />
        <ProductWaiting name={'ดวงพร ใจกล้า'} date={'14/01/1999'} time={'11.00'} listcount={'4'} />
        <ProductWaiting name={'ดวงพร ใจกล้า'} date={'14/01/1999'} time={'11.00'} listcount={'4'} />
        <View style={{ paddingTop: 20 }} />
      </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  headerbar: {
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
    flexDirection: 'row',
  },
  buttoncontainer:{
    alignItems: 'center', 
    paddingTop: 20 
  },
  headertext:{
    marginTop: 15, 
    color: '#808080', 
    fontWeight: "bold"
  }
})