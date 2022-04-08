import React, { Component , useState } from 'react'
import { StyleSheet, ScrollView, ActivityIndicator, View, Text , TouchableOpacity } from 'react-native'
import { ThemeProvider, Button, Input, Image } from 'react-native-elements'

import ForwardHeader from '../component/forward-hearder'
import ForwardPickup from './forward-pickup'
import ForwardSending from './forward-sending'
import ForwardHistory from './forward-history'


export default function Forward({ navigation }) {
  const [page, setPage] = useState(0)
  return (
    <ThemeProvider theme={theme}>
      <ForwardHeader navigation={navigation} page={page} setPage={setPage}/>
      {page == 0 ?( 
        <ForwardPickup navigation={navigation}/>
      ):(
        page == 1 ?(
          <ForwardSending navigation={navigation}/>
        ):(
          <ForwardHistory navigation={navigation}/>
        )
      ) 
    }
    </ThemeProvider>
  );
}


const theme = {
  Button: {
    raised: true,
  },
  Text:{
    
  }
}