import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import SelectReceiver from './screens/select-receiver'
import Forward from './screens/forward'
import Pickup from './screens/pickup'
import Sending from './screens/sending'
import QrcodeScan from './screens/qrcode-scan'
import ForwardProduct from './screens/forward-product'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "#000000",
        headerTitleStyle: {
          fontWeight: 'bold'
        },
        headerTitleAlign: 'center'
      }}
    >

      <Stack.Screen
        name="Forward"
        component={Forward}
        options={{ title: 'Forward' }} />
      <Stack.Screen
        name="QrcodeScan"
        component={QrcodeScan}
        options={{ title: 'Qrcode' }} />
      <Stack.Screen 
        name="Pickup"
        component={Pickup}
        options={{ title: 'รับสินค้า',headerStyle:{backgroundColor:"transparent"}}} />
      <Stack.Screen 
        name="Sending"
        component={Sending}
        options={{ title: 'ส่งต่อสินค้า',headerStyle:{backgroundColor:"transparent"}}} />
      <Stack.Screen 
        name="SelectReceiver"
        component={SelectReceiver}
        options={{ title: 'เลือกผู้รับสินค้า' ,headerStyle:{backgroundColor:"transparent"}}} />
      <Stack.Screen 
        name="ForwardProduct"
        component={ForwardProduct}
        options={{ title: 'ส่งต่อสินค้า' }} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
