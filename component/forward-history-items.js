import React, { Component, useState } from 'react'
import { StyleSheet, ScrollView, ActivityIndicator, View, Text, Pressable } from 'react-native'
import { ThemeProvider, Button, Input, Image } from 'react-native-elements'

import Icon from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/Entypo'

export default function HistoryItems({ code, itemname, serialno, recieverId, recieverName, date, itemstatus , status}) {

  return (
    <View style={{ weight: "100%", backgroundColor: "#FFFFFF", margin: 15, borderRadius: 10 }}>
      <View style={{ padding: 10, flexDirection: 'row', alignItems: 'stretch' }}>
        <View style={{ paddingHorizontal: 5, width: '20%' }}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/219/219986.png' }}
            style={styles.image}
            containerStyle={{}}
          />
        </View>
        <View style={{ width: '60%' }}>
          <View style={{ flexDirection: 'row' }}>
            <View>
              <Text style={{ fontSize: 13, color: '#000000' }}>CODE : {code}</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View>
              <Text style={{ fontSize: 13, color: '#000000' }}>{itemname} </Text>
            </View>
          </View>
          <View style={{ paddingTop: 6, flexDirection: 'row' }}>
            <View>
              <Text style={{ fontSize: 12, color: '#808080' }}>Serial Number : {serialno} </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: '#E9E9E9',
          borderBottomWidth: 1,
        }}
      />
      <View style={{ flexDirection: "row", padding: 15 }}>
        <View style={{ width: '60%' }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ width: "15%" }}>
              <Text style={{ fontSize: 12, color: '#808080' }}>ผู้รับ :</Text>
            </View>
            <View style={{ width: "40%" }}>
              <Text style={{ flex: 1, fontSize: 13 }} >{recieverId}</Text>
            </View>
            <View style={{ width: "40%" }}>
              <Text style={{ flex: 1, fontSize: 13 }} > {recieverName}</Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ width: "15%" }}>
              <Text style={{ fontSize: 12, color: '#808080' }}>วันที่ : </Text>
            </View>
            <View style={{ width: "80%" }}>
              <Text style={{ flex: 1, fontSize: 13 }} >{date}</Text>
            </View>
          </View>
        </View>
        {status == 'sending'?

        <ItemsStatusSend itemstatus={itemstatus} />
        :
        <ItemsStatusReceive itemstatus={itemstatus} />
      }
      </View>
    </View>
  );
}

function ItemsStatusSend({ itemstatus }) {
  return (
    <>
      {itemstatus == 1 ? (
        <View style={{ width: "40%", justifyContent: "flex-end", alignItems: "flex-end" }}>
          <Text style={{ color: "#97D700" }}>
            <Icon name="checkcircleo" size={12} color='#97D700' style={{ width: "10%", alignSelf: "center" }} /> ส่งสำเร็จ
        </Text>
        </View>

      ) : (
          itemstatus == 2 ? (
            <View style={{ width: "40%", justifyContent: "flex-end", alignItems: "flex-end" }}>
              <Text style={{ color: "orange" }}>
                <Icon2 name="back-in-time" size={12} color='orange' style={{ width: "10%", alignSelf: "center" }} /> ยังไม่รับ
              </Text>
            </View>
          ) : (
              <View style={{ width: "40%", justifyContent: "flex-end", alignItems: "flex-end" }}>
                <Text style={{ color: "red" }}>
                  <Icon2 name="block" size={12} color='red' style={{ width: "10%", alignSelf: "center" }} /> ผู้รับปฎิเสธ
                </Text>
              </View>
            )

        )}
    </>
  );
}

function ItemsStatusReceive({ itemstatus }) {
  return (
    <>
      {itemstatus == 1 ? (
        <View style={{ width: "40%", justifyContent: "flex-end", alignItems: "flex-end" }}>
          <Text style={{ color: "#97D700" }}>
            <Icon name="checkcircleo" size={12} color='#97D700' style={{ width: "10%", alignSelf: "center" }} /> รับแล้ว
        </Text>
        </View>

      ) : (
          <View style={{ width: "40%", justifyContent: "flex-end", alignItems: "flex-end" }}>
            <Text style={{ color: "red" }}>
              <Icon2 name="block" size={12} color='red' style={{ width: "10%", alignSelf: "center" }} /> ปฎิเสธการรับ
              </Text>
          </View>
        )}
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1
  },

})