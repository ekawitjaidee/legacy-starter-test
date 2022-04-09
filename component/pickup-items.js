import React, { Component, useState } from 'react'
import { StyleSheet, Modal, ScrollView, ActivityIndicator, View, Text, Pressable, TouchableOpacity } from 'react-native'
import { ThemeProvider, Button, Input, Image } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/AntDesign'


export default function PickupItems({ navigation, code, itemname, serialno , setModalVisible}) {


  return (
    <View style={{ backgroundColor: "#FFFFFF", borderRadius: 10, marginTop: 10 }}>
      <View style={{ padding: 10, flexDirection: 'row', alignItems: 'stretch' }}>
        <View style={{ paddingHorizontal: 5, width: '20%' }}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/219/219986.png' }}
            style={styles.image2}
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
        <View style={{ width: '15%', justifyContent: 'center' }}>
          <Icon name="check-circle" size={35} color='#CCCCCC' style={{ alignSelf: "center" }} />
        </View>
        <Pressable
          style={{ width: '5%', height: '30%' }}
          onPress={() => setModalVisible(true)}
        >
          <Icon2 name="close" size={15} color='#CCCCCC' style={{ alignSelf: "center" }} />
        </Pressable>
      </View>
    </View>

  )
}



const styles = StyleSheet.create({
  image2: {
    width: 50,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1
  },
})