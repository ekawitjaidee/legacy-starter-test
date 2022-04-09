import React, { Component } from 'react'
import { StyleSheet, ScrollView, ActivityIndicator, View, Text, TouchableOpacity } from 'react-native'
import { ThemeProvider, Button, Input, Image } from 'react-native-elements'



export default function forwardProduct({ navigation }) {
    return (
        <ThemeProvider theme={theme}>
            <ScrollView style={styles.container}>
                <View style={styles.box}>
                    <Text style={styles.textcaution}>กรุณาตรวจสอบข้อมูลการส่งต่อสินค้าของท่าน</Text>
                    <Text style={styles.textcaution}>หากยืนยันแล้ว จะไม่สามารถแก้ไขรายการได้</Text>
                    <Text style={{ fontSize: 12, color: '#4D4D4D', paddingTop: 20 }}>ผู้รับสินค้า :110000045 ธนะวัฒน์ โสภานกุล</Text>
                    <View
                        style={{ borderBottomColor: '#E9E9E9', borderBottomWidth: 1, padding: 10 }} />
                    <Text style={{ fontSize: 12, color: '#4D4D4D', paddingTop: 20 }}>ผู้ส่งสินค้า :ธนพล ศรีธนะชัย</Text>
                    <Text style={{ fontSize: 12, color: '#4D4D4D', paddingTop: 5 }}>วันที่ส่ง :05/12/2020  13:09</Text>
                    <View
                        style={{ borderBottomColor: '#E9E9E9', borderBottomWidth: 1, padding: 10 }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20 }}>
                        <Text style={{ fontSize: 12, color: '#4D4D4D' }}>สินค้าทั้งหมด :</Text>
                        <Text style={{ fontSize: 10, color: '#4D4D4D' }}>(1 รายการ)</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={{ height: "12%", alignItems: "center", alignContent: "flex-end", marginTop: 9 }}>
                <Button title='ยืนยัน'
                    containerStyle={{
                        width: '50%',
                        borderRadius: 18,
                    }}
                    buttonStyle={{
                        backgroundColor: '#97D700',
                    }}
                    onPress={() => navigation.navigate("Forward")}
                ></Button>
            </View>
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
        padding: 20
    },
    box: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 5,
    },
    preloader: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textcaution: {
        fontSize: 12,
        color: 'red',
        textAlign: 'center',
        padding: 5,
    },
    textsendreceive: {
        fontSize: 12,
        color: '#4D4D4D'
    }
})