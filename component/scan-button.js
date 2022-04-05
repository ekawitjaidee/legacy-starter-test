import React, { Component } from 'react'
import { StyleSheet, ScrollView, ActivityIndicator, View, Text } from 'react-native'
import { ThemeProvider, Button, Input, Image } from 'react-native-elements'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function ScanButton({ navigation}) {
  return (
          <Button
            style={style.scanbutton}
            icon={
              <Icon name='scan-helper' size={15} color='white' />
            }
            title='    Scan Code'
            onPress={()=> navigation.navigate('ForwardHistory')}
            containerStyle={{
              width: '50%',
              borderRadius: 8,
            }}
            buttonStyle={{
              backgroundColor: '#000000',
            }}
          />

  );
}

const style = StyleSheet.create({
scanbutton: {
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center'

}})