import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import forwardPickup from './screens/forward-pickup'
import forwardSending from './screens/forward-sending'
import forwardHistory from './screens/forward-history'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FFFFFF'
        },
        headerTintColor: "#000000",
        headerTitleStyle: {
          fontWeight: 'bold'
        },
        headerTitleAlign: 'center'
      }}
    >

      <Stack.Screen
        name="ForwardPickup"
        component={forwardPickup}
        options={{ title: 'Forward' }} />
      <Stack.Screen
        name="ForwardSending"
        component={forwardSending}
        options={{ title: 'Forward' }} />
      <Stack.Screen
        name="ForwardHistory"
        component={forwardHistory}
        options={{ title: 'Forward' }} />
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
