import React from 'react';
import { StatusBar, StyleSheet, Text, View, Image, TouchableWithoutFeedback, ScrollView } from 'react-native';

export default class Management extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <View style={{backgroundColor: '#66C1FF', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: '#fff', fontWeight: '600', fontSize: 25, textAlign: 'center', marginBottom: 30}}>Select your choice of course for Management?</Text>
            
            {/* <View style={{flex: 1, flexDirection: 'row', marginBottom: 30, borderWidth: 0, borderColor: '', alignItems: 'center'}}>
            <View style={{flex: 1, backgroundColor: '#1795EA', borderRadius: 100, justifyContent: 'center', alignItems: 'center', width: 60, height: 60}}>
                <Image source={require('../../assets/images/finance.png')} style={{width: 25, height: 25, marginLeft: 0, marginRight: 0}} /> 
            </View>
            <View style={{flex: 4, borderRadius: 100, justifyContent: 'center'}}>
                <Text style={{marginLeft: 20, fontSize: 20, fontWeight: "600", marginRight: 20, color: '#fff'}}>Finance</Text>
            </View>
            </View> */}

            <View style={{flex: 1, flexDirection: 'row', marginBottom: 30, alignItems: 'center'}}>
            <View style={{flex: 1, backgroundColor: '#1795EA', borderRadius: 100, justifyContent: 'center', alignItems: 'center', width: 60, height: 60}}>
                <Image source={require('../../assets/images/finance.png')} style={{width: 25, height: 25, marginLeft: 0, marginRight: 0}} /> 
            </View>
            <View style={{flex: 3.5, borderRadius: 100, justifyContent: 'center'}}>
                <Text style={{marginLeft: 20, fontSize: 20, fontWeight: "600", marginRight: 20, color: '#fff'}}>Finance</Text>
            </View>
            </View>

            <View style={{flex: 1, flexDirection: 'row', marginBottom: 30, alignItems: 'center'}}>
            <View style={{flex: 1, backgroundColor: '#1795EA', borderRadius: 100, justifyContent: 'center', alignItems: 'center', width: 60, height: 60}}>
                <Image source={require('../../assets/images/engg.png')} style={{width: 25, height: 25}} /> 
            </View>
            <View style={{flex: 3.5, borderRadius: 100, justifyContent: 'center'}}>
                <Text style={{marginLeft: 20, fontSize: 20, fontWeight: "600", marginRight: 20, color: '#fff'}}>Engineering &amp; Technology</Text>
            </View>
            </View>

            <View style={{flex: 1, flexDirection: 'row', marginBottom: 30, alignItems: 'center'}}>
            <View style={{flex: 1, backgroundColor: '#1795EA', borderRadius: 100, justifyContent: 'center', alignItems: 'center', width: 60, height: 60}}>
                <Image source={require('../../assets/images/mgmt.png')} style={{width: 25, height: 25}} /> 
            </View>
            <View style={{flex: 3.5, borderRadius: 100, justifyContent: 'center'}}>
                <Text style={{marginLeft: 20, fontSize: 20, fontWeight: "600", marginRight: 20, color: '#fff'}}>General Management</Text>
            </View>
            </View>

            <View style={{flex: 1, flexDirection: 'row', marginBottom: 30, alignItems: 'center'}}>
            <View style={{flex: 1, backgroundColor: '#1795EA', borderRadius: 100, justifyContent: 'center', alignItems: 'center', width: 60, height: 60}}>
                <Image source={require('../../assets/images/truck.png')} style={{width: 25, height: 25}} /> 
            </View>
            <View style={{flex: 3.5, borderRadius: 100, justifyContent: 'center'}}>
                <Text style={{marginLeft: 20, fontSize: 20, fontWeight: "600", marginRight: 20, color: '#fff'}}>Logistics &amp; Supply Chain</Text>
            </View>
            </View>

        </View>
    </>
    );
  }
};

const styles = StyleSheet.create({
    box: {
      margin: 30,
      marginTop: 15,
      marginBottom: 20,
      flex: 1,
      elevation: 12,
      shadowOpacity: 0.2,
      shadowRadius: 10,
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 0
      },
    },
    linearGradient: {
      flex: 1,
      alignItems: "stretch",
      paddingLeft: 10,
      paddingRight: 10,
      borderRadius: 20
    },
    buttonStyle: {
      width: 180,
      borderRadius: 20,
      elevation: 10
    },
    container: {
      backgroundColor: '#F3F9FF',
      flexDirection: 'column',
      flex: 1,
      paddingLeft: 10,
      paddingRight: 10,
      alignItems: "stretch",
      justifyContent: "center"
    }
  });
  