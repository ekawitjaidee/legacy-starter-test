import React, { Component, useState } from 'react'
import { StyleSheet, ScrollView, ActivityIndicator, View, Text, Pressable ,Picker} from 'react-native'
import { ThemeProvider, Button, Input, Image } from 'react-native-elements'

import HistoryItems from '../component/forward-history-items'
import HistoryInput from '../component/forward-history-input'

export default function ForwardHistory({ navigation }) {

  const [status, setStatus] = useState('sending') //sending,receive


  return (
    <ThemeProvider theme={theme}>
      <HistoryInput status={status} setStatus={setStatus}/>
      <View style={{ weight: "100%", marginHorizontal: 15, alignItems: "flex-end" }}>
        <Text style={{color:"#4D4D4D" , fontSize:12}}>(ทั้งหมด 4 รายการ)</Text>
      </View>
      <ScrollView>
        {status == 'sending'?
        <>
        <HistoryItems code={'TH1054'} itemname={'เอฟ แอล กลิ่นสับปะรดมะนาว'} serialno={'129488800002'} recieverId={'11000000021'} recieverName={'ดวงพร ใจกล้า'} date={'14/01/1999 11.00'} itemstatus={1} status={status}/>
        <HistoryItems code={'TH1054'} itemname={'เอฟ แอล กลิ่นสับปะรดมะนาว'} serialno={'129488800002'} recieverId={'11000000021'} recieverName={'ดวงพร ใจกล้า'} date={'14/01/1999 11.00'} itemstatus={2} status={status}/>
        <HistoryItems code={'TH1054'} itemname={'เอฟ แอล กลิ่นสับปะรดมะนาว'} serialno={'129488800002'} recieverId={'11000000021'} recieverName={'ดวงพร ใจกล้า'} date={'14/01/1999 11.00'} itemstatus={3} status={status}/>
        </>
        :
        <>
        <HistoryItems code={'TH1054'} itemname={'เอฟ แอล กลิ่นสับปะรดมะนาว'} serialno={'129488800002'} recieverId={'11000000021'} recieverName={'ดวงพร ใจกล้า'} date={'14/01/1999 11.00'} itemstatus={1} status={status}/>
        <HistoryItems code={'TH1054'} itemname={'เอฟ แอล กลิ่นสับปะรดมะนาว'} serialno={'129488800002'} recieverId={'11000000021'} recieverName={'ดวงพร ใจกล้า'} date={'14/01/1999 11.00'} itemstatus={2} status={status}/>
        </>
      }
        
      </ScrollView>
    </ThemeProvider>
  );
}

const theme = {
  Button: {
    raised: true,
  }
}
