import React, { Component, useState } from 'react'
import { StyleSheet, ScrollView, ActivityIndicator, View, Text, TouchableOpacity, TextInput } from 'react-native'
import { ThemeProvider, Button, Input, Image } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/AntDesign'

import Receiver from '../component/receiver'

export default function SelectReceiver({ navigation }) {

    const [fav, setFav] = useState(0)
    const [search, setSearch] = useState('')

    return (
        <ThemeProvider theme={theme}>
            <ScrollView style={styles.container}>
                <View style={styles.textbox}>
                    <Icon style={{alignSelf:"center"}} name='search' size={15} color='#808080' />
                    <TextInput
                        onChangeText={text => setSearch(text)}
                        value={search}
                        placeholder='ค้นหา รหัส / ชื่อ - นามสกุล' />
                    <TouchableOpacity style={{alignSelf:"center"}} onPress={() => setSearch('')}><Icon2 name='closecircle' size={15} color='#CCCCCC' /></TouchableOpacity>
                </View>
                <Receiver id={"110000002"} name={"ธนะวัฒน์ โสภานกุล"} po={"DD"} fav={0} navigation={navigation} />
                <Receiver id={"110000032"} name={"ธนพล ไทยวิทวัส"} po={"CAP"} fav={0} navigation={navigation} />
                <Receiver id={"110000087"} name={"ธนะสิทธิ์ แสงจันทร์"} po={"BLDD"} fav={1} navigation={navigation} />
                <Receiver id={"110000145"} name={"ธนพร แวกประยูร"} po={"ED"} fav={1}  navigation={navigation} />
            </ScrollView>
        </ThemeProvider>
    );
}


const theme = {
    Button: {
        raised: true
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFFFFF',
    },
    box: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 5,
        paddingBottom: 40
    },
    preloader: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textbox: {
        backgroundColor: '#F2F2F2',
        padding: 10,
        borderRadius: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 20,
    }
})