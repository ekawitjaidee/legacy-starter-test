import React, { Component, useState } from 'react'
import { StyleSheet, ScrollView, ActivityIndicator, View, Text } from 'react-native'
import { ThemeProvider, Button, Input, Image } from 'react-native-elements'

import ForwardHeader from '../component/forward-hearder'

export default function ForwardSending({ navigation }) {
  const [page, setPage] = useState(1)
  return (
    <ThemeProvider theme={theme}>
      <ForwardHeader navigation={navigation} page={page} />
      <View>
        <Text>Hellooooo sending</Text>
      </View>
    </ThemeProvider>
  );
}

const theme = {
  Button: {
    raised: true,
  }
}