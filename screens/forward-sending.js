import React, { Component } from 'react'
import { StyleSheet, ScrollView, ActivityIndicator, View, Text, TouchableOpacity } from 'react-native'
import { ThemeProvider, Button, Input, Image } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'




export default function ForwardSending({ navigation }) {
    return (
            <ScrollView style={styles.container}>
                <View style={styles.box}>
                    <View style={{ borderLeftWidth: 5, borderColor: '#97D700', paddingLeft: 5 }}><Text>กรุณาเลือกผู้รับสินค้า</Text></View>
                    <View style={{ paddingTop: 40 }}>
                        <TouchableOpacity style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}
                            onPress={() => navigation.navigate('SelectReceiver')}>
                            <Text style={{ fontSize: 15, color: '#808080' }}>ค้นหา รหัส / ชื่อ - นามสกุล</Text>
                            <Icon
                                name='search'
                                size={15}
                                color='#808080' />
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{ borderBottomColor: '#E9E9E9', borderBottomWidth: 1, padding: 5 }} />
                </View>
            </ScrollView>
    );
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
        paddingBottom: 40
    },
})