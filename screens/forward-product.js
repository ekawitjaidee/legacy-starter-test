import React, { Component } from 'react'
import { StyleSheet, ScrollView, ActivityIndicator, View, Text, TouchableOpacity } from 'react-native'
import { ThemeProvider, Button, Input, Image } from 'react-native-elements'



export default function ForwardProduct() {
    return (
        <ThemeProvider theme={theme}>
            <ScrollView style={styles.container}>
                <View style={styles.box}>
                    <Text style={styles.textcaution}>กรุณาตรวจสอบข้อมูลการส่งต่อสินค้าของท่าน</Text>
                    <Text style={styles.textcaution}>หากยืนยันแล้ว จะไม่สามารถแก้ไขรายการได้</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '20%', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.textfisrtrow}>ผู้รับสินค้า</Text><Text style={styles.textfisrtrow}>:</Text>
                        </View>
                        <Text style={styles.textfisrtrow}>110000045 ธนะวัฒน์ โสภานกุล</Text>
                    </View>
                    <View
                        style={{ borderBottomColor: '#E9E9E9', borderBottomWidth: 1, padding: 10 }} />
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '20%', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.textfisrtrow}>ผู้ส่งสินค้า</Text><Text style={styles.textfisrtrow}>:</Text>
                        </View>
                        <Text style={styles.textfisrtrow}>ธนพล ศรีธนะชัย</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ width: '20%', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.textsecondrow}>วันที่ส่ง</Text><Text style={styles.textsecondrow}>:</Text>
                        </View>
                        <Text style={styles.textsecondrow}>05/12/2020  13:09</Text>
                    </View>
                    <View
                        style={{ borderBottomColor: '#E9E9E9', borderBottomWidth: 1, padding: 10 }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20 }}>
                        <Text style={{ fontSize: 12, color: '#4D4D4D' }}>สินค้าทั้งหมด :</Text>
                        <Text style={{ fontSize: 10, color: '#4D4D4D' }}>(1 รายการ)</Text>
                    </View>

                </View>
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
    textfisrtrow: {
        fontSize: 12,
        color: '#4D4D4D',
        paddingTop: 20
    },
    textsecondrow: {
        fontSize: 12,
        color: '#4D4D4D',
        paddingTop: 5
    },
})