import React, { Component ,useState } from 'react'
import { StyleSheet, ScrollView, ActivityIndicator, View, Text } from 'react-native'
import { ThemeProvider, Button, Input, Image } from 'react-native-elements'

import ForwardHeader from '../component/forward-hearder'

export default function ForwardHistory({ navigation }) {
  const [page, setPage] = useState(2)
  return (
    <ThemeProvider theme={theme}>
      <ForwardHeader navigation={navigation} page={page} />
      <View>
        <Text>Hellooooo</Text>
      </View>
    </ThemeProvider>
  );
}

const theme = {
  Button: {
    raised: true,
  }
}