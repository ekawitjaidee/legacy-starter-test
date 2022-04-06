import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Forward from './screens/forward'
import Pickup from './screens/pickup'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerStyle: {
        //   backgroundColor: '#FFFFFF'
        // },
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
        name="Pickup"
        component={Pickup}
        options={{ title: 'รับสินค้า'}}
        headerStyle={{backgroundColor:"red"}}
      />
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
