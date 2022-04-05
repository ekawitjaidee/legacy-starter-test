import React, { Component , useState } from 'react'
import { StyleSheet, ScrollView, ActivityIndicator, View, Text , TouchableOpacity } from 'react-native'
import { ThemeProvider, Button, Input, Image } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Entypo'
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons'

import ProductWaiting from '../component/product-waiting'
import ScanButton from '../component/scan-button'
import ForwardHeader from '../component/forward-hearder'

export default function ForwardPickup({ navigation }) {

  const [page,setPage] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      <ForwardHeader navigation={navigation} page={page}/>
      <ScrollView style={style.container}>
        <View style={{ alignItems: 'center', paddingTop: 20 }}>
          <ScanButton navigation={navigation}/>
        </View>
        <Text style={{ marginTop: 15, color: '#808080' }}>รายการสินค้ารอรับเข้า</Text>
        <ProductWaiting name={'ดวงพร ใจกล้า'} date={'14/01/1999'} time={'11.00'} listcount={'4'} />
        <ProductWaiting name={'ดวงพร ใจกล้า'} date={'14/01/1999'} time={'11.00'} listcount={'4'} />
        <ProductWaiting name={'ดวงพร ใจกล้า'} date={'14/01/1999'} time={'11.00'} listcount={'4'} />
        <ProductWaiting name={'ดวงพร ใจกล้า'} date={'14/01/1999'} time={'11.00'} listcount={'4'} />
        <ProductWaiting name={'ดวงพร ใจกล้า'} date={'14/01/1999'} time={'11.00'} listcount={'4'} />
        <View style={{ paddingTop: 20 }} />
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
    paddingHorizontal: 20,
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
  headerbar: {
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
    flexDirection: 'row',

  }
})