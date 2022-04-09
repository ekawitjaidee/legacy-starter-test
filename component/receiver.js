import React, { Component, useState } from 'react'
import { StyleSheet, ScrollView, ActivityIndicator, View, Text, TouchableOpacity, TextInput, Pressable } from 'react-native'
import { ThemeProvider, Button, Input, Image } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'


export default function Receiver({ id, name, po, fav , navigation}) {
    return (
        <>
            <Pressable onPress={ () => navigation.navigate("Sending") }>
                {
                    fav == 0 ? (
                        <View style={styles.box}>
                            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                                <Image
                                    source={{ uri: 'https://cdn-icons-png.flaticon.com/512/219/219986.png' }}
                                    style={styles.image}
                                    containerStyle={{}} />
                                <Text style={styles.textcenter}>{id}</Text>
                                <Text style={styles.textcenter}>{name}</Text>
                                <Text style={styles.textcenter}>({po})</Text>
                                <TouchableOpacity style={styles.textcenter}><Icon2 name='star-circle' size={30} color='#97D700' /></TouchableOpacity>
                            </View>
                            <View style={{ borderBottomColor: '#E9E9E9', borderBottomWidth: 1, padding: 5 }} />
                        </View>
                    ) :
                        (
                            <View style={styles.box}>
                                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                                    <Image
                                        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/219/219986.png' }}
                                        style={styles.image}
                                        containerStyle={{}} />
                                    <Text style={styles.textcenter}>{id}</Text>
                                    <Text style={styles.textcenter}>{name}</Text>
                                    <Text style={styles.textcenter}>({po})</Text>
                                    <TouchableOpacity style={styles.textcenter}><Icon2 name='star-circle' size={30} color='#CCCCCC' /></TouchableOpacity>
                                </View>
                                <View style={{ borderBottomColor: '#E9E9E9', borderBottomWidth: 1, padding: 5 }} />
                            </View>
                        )
                }
            </Pressable>
        </>
    );
}



const styles = StyleSheet.create({
    image: {
        width: 40,
        height: 40,
        alignSelf: 'center',
    },
    textcenter: {
        alignSelf: 'center',
    },
    box: {
        padding: 5,
    }
})