import React, { Component, useState } from 'react'
import { StyleSheet, Modal, ScrollView, ActivityIndicator, View, Text, Pressable, TouchableOpacity } from 'react-native'
import { ThemeProvider, Button, Input, Image } from 'react-native-elements'

import ScanButton from '../component/scan-button'
import SendingItems from '../component/sending-items'


export default function Sending({ navigation }) {
  const [CancelModalVisible, setCancelModalVisible] = useState(false);
  const [ConfirmModalVisible, setConfirmModalVisible] = useState(false);

  return (
    <ThemeProvider theme={theme}>
     <ModalDeleteItem CancelModalVisible={CancelModalVisible} setCancelModalVisible={setCancelModalVisible}/>
     <ModalConfirmItem ConfirmModalVisible={ConfirmModalVisible} setConfirmModalVisible={setConfirmModalVisible}/>
     {/* For Test Scan Success */}
     {/* <Button style={{height:50}} onPress={()=>setConfirmModalVisible(!ConfirmModalVisible)}><Text>Click to test modal</Text></Button>   */} 
     <View style={{ marginTop: 10, paddingHorizontal: 10 }}>
        <View style={{ height:"10%",backgroundColor: "#FFFFFF", borderRadius: 10 }} elevation={10}>
          <View style={{ padding: 10, flexDirection: 'row', alignItems: 'stretch' }}>
            <View style={{ paddingHorizontal: 5, width: '13%' }}>
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/219/219986.png' }}
                style={styles.image}
              />
            </View>
            <View style={{ width: '40%' }}>
              <View style={{ flex: 1, flexDirection: 'row' , alignItems:"center"}}>
                <View>
                  <Text style={{ fontSize: 12, color: '#808080' }}>ผู้รับ : </Text>
                </View>
                <View style={{}}>
                  <Text style={{ fontSize: 13 }} >ดวงพร ใจกล้า</Text>
                </View>
              </View>
            </View>
            <View style={{ borderLeftWidth: 1, borderColor: '#E9E9E9', marginVertical: 5, width: '1%' }}></View>
            <View style={{ paddingLeft: 5, width: '46%' }}>
              <ScanButton navigation={navigation} buttonWidth={'100%'} />
            </View>
          </View>
        </View>
        <View style={{height:"4%", marginTop: 15 }}>
          <Text style={{ alignSelf: "flex-end" }}>(สินค้าทั้งหมด 4 รายการ)</Text>
        </View>
        <ScrollView style={{height:"70%",}}>
          {/*  Pickup Items Code , Name , Serial Number*/}
          <SendingItems code={'TH1054'} itemname={'เอฟ แอล กลิ่นสับปะรดมะนาว'} serialno={'129488800002'} setModalVisible={setCancelModalVisible}/>
          <SendingItems code={'TH1055'} itemname={'เอฟ แอล กลิ่นสับปะรดมะนาว'} serialno={'129488800002'} setModalVisible={setCancelModalVisible}/>
          <SendingItems code={'TH1056'} itemname={'เอฟ แอล กลิ่นสับปะรดมะนาว'} serialno={'129488800002'} setModalVisible={setCancelModalVisible}/>
          <SendingItems code={'TH1057'} itemname={'เอฟ แอล กลิ่นสับปะรดมะนาว'} serialno={'129488800002'} setModalVisible={setCancelModalVisible}/>
          <SendingItems code={'TH1055'} itemname={'เอฟ แอล กลิ่นสับปะรดมะนาว'} serialno={'129488800002'} setModalVisible={setCancelModalVisible}/>
          <SendingItems code={'TH1056'} itemname={'เอฟ แอล กลิ่นสับปะรดมะนาว'} serialno={'129488800002'} setModalVisible={setCancelModalVisible}/>
          <SendingItems code={'TH1057'} itemname={'เอฟ แอล กลิ่นสับปะรดมะนาว'} serialno={'129488800002'} setModalVisible={setCancelModalVisible}/>
          <View style={{marginTop:15}}/>
        </ScrollView>
        <View style={{ height:"12%",alignItems:"center" , alignContent:"flex-end",marginTop:9}}>
          <Button title='เสร็จสิ้น'             
          containerStyle={{
              width: '50%',
              borderRadius: 18,
            }}
          buttonStyle={{
            backgroundColor: '#97D700',
          }}
          onPress={()=> navigation.navigate("ForwardProduct")}
            ></Button>
        </View>
      </View>
    </ThemeProvider>
  );
}

function ModalDeleteItem({ CancelModalVisible, setCancelModalVisible }) {
  return (
    <>
      {/* Start modal */}
      < Modal
        animationType="none"
        transparent={true}
        visible={CancelModalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setCancelModalVisible(!CancelModalVisible);
        }
        }
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ paddingHorizontal: 20 }}>
              <Text style={styles.modalText}>คุณต้องการลบรายการนี้</Text>
              <View
                style={{
                  borderBottomColor: '#E9E9E9',
                  borderBottomWidth: 1,
                }}
              />
              <View style={{ weight: "100%", backgroundColor: "#E9E9E9", marginTop: 10 }}>
                <View style={{ padding: 10, flexDirection: 'row', alignItems: 'stretch' }}>
                  <View style={{ width: '25%' }}>
                    <Image
                      source={{ uri: 'https://cdn-icons-png.flaticon.com/512/219/219986.png' }}
                      style={styles.image2}
                      containerStyle={{}}
                    />
                  </View>
                  <View style={{ width: '80%' }}>
                    <View style={{ flexDirection: 'row' }}>
                      <View>
                        <Text style={{ fontSize: 13, color: '#000000' }}>CODE : TH1054</Text>
                      </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <View>
                        <Text style={{ fontSize: 13, color: '#000000' }}>เอฟ แอล กลิ่นสับปะรดมะนาว </Text>
                      </View>
                    </View>
                    <View style={{ paddingTop: 6, flexDirection: 'row' }}>
                      <View>
                        <Text style={{ fontSize: 12, color: '#808080' }}>Serial Number : 129488800002 </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <Pressable
                style={{ width: '50%', height: 50, justifyContent: "center", borderRightWidth: 1, borderTopWidth: 1, borderColor: "#E9E9E9" }}
                onPress={() => setCancelModalVisible(!CancelModalVisible)}
              >
                <Text style={styles.textStyle}>ลบ</Text>
              </Pressable>
              <Pressable
                style={{ width: '50%', height: 50, justifyContent: "center", borderLeftWidth: 1, borderTopWidth: 1, borderColor: "#E9E9E9" }}
                onPress={() => setCancelModalVisible(!CancelModalVisible)}
              >
                <Text style={styles.textStyle}>ยกเลิก</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal >
      {/* Stop Modal */}
    </>
  );
}

function ModalConfirmItem({ ConfirmModalVisible, setConfirmModalVisible }) {
  return (
    <>
      {/* Start modal */}
      < Modal
        animationType="none"
        transparent={true}
        visible={ConfirmModalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setConfirmModalVisible(!ConfirmModalVisible);
        }
        }
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ paddingHorizontal: 20 }}>
              <Text style={styles.modalTextConfirm}>แสกนสำเร็จ!</Text>
              <View
                style={{
                  borderBottomColor: '#E9E9E9',
                  borderBottomWidth: 1,
                }}
              />
              <View style={{ weight: "100%", backgroundColor: "#E9E9E9", marginTop: 10 }}>
                <View style={{ padding: 10, flexDirection: 'row', alignItems: 'stretch' }}>
                  <View style={{ width: '25%' }}>
                    <Image
                      source={{ uri: 'https://cdn-icons-png.flaticon.com/512/219/219986.png' }}
                      style={styles.image2}
                      containerStyle={{}}
                    />
                  </View>
                  <View style={{ width: '80%' }}>
                    <View style={{ flexDirection: 'row' }}>
                      <View>
                        <Text style={{ fontSize: 13, color: '#000000' }}>CODE : TH1054</Text>
                      </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <View>
                        <Text style={{ fontSize: 13, color: '#000000' }}>เอฟ แอล กลิ่นสับปะรดมะนาว </Text>
                      </View>
                    </View>
                    <View style={{ paddingTop: 6, flexDirection: 'row' }}>
                      <View>
                        <Text style={{ fontSize: 12, color: '#808080' }}>Serial Number : 129488800002 </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <Pressable
                style={{ width: '50%', height: 50, justifyContent: "center", borderRightWidth: 1, borderTopWidth: 1, borderColor: "#E9E9E9" }}
                onPress={() => setConfirmModalVisible(!ConfirmModalVisible)}
              >
                <Text style={styles.textStyle}>เสร็จสิ้น</Text>
              </Pressable>
              <Pressable
                style={{ width: '50%', height: 50, justifyContent: "center", borderLeftWidth: 1, borderTopWidth: 1, borderColor: "#E9E9E9" }}
                onPress={() => setConfirmModalVisible(!ConfirmModalVisible)}
              >
                <Text style={styles.textStyle}>แสกนต่อ</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal >
      {/* Stop Modal */}
    </>
  );
}

const theme = {
  Button: {
      raised: true
  }
}


const styles = StyleSheet.create({

  senderTab: {
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    borderRadius: 3
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 30,
    borderColor: '#000000',
    borderWidth: 1
  },
  image2: {
    width: 50,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1
  },
  modalView: {
    marginTop: '50%',
    marginHorizontal: "13%",
    backgroundColor: "white",
    borderRadius: 10,
    paddingTop: 20,

    // paddingHorizontal:"5%",
    alignItems: "center",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "#4D4D4D",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "red",
    fontWeight: "bold"
  },
  modalTextConfirm: {
    marginBottom: 15,
    textAlign: "center",
    color: "#97D700",
    fontWeight: "bold",
    fontSize:20
  }
})