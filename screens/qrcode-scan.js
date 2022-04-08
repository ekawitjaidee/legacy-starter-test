import React, { Component, useState } from 'react'
import { StyleSheet, AppRegistry, Linking, ActivityIndicator, View, Text, Pressable, TouchableOpacity } from 'react-native'
import { ThemeProvider, Button, Input, Image } from 'react-native-elements'

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';


function onSuccess(e){
  Linking.openURL(e.data).catch(err =>
    console.error('An error occured', err)
  );
}

export default function QrcodeScan({ navigation }) {

  return (
    <ThemeProvider theme={theme}>
      <QRCodeScanner
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.auto}
        topContent={
          <Text style={styles.centerText}>
            Go to{' '}
            <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
    </ThemeProvider>
  );
}


const theme = {
  Button: {
    raised: true,
  },
  Text: {

  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});

AppRegistry.registerComponent('default', () => QrcodeScan);