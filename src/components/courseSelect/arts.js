import React from 'react';
import { StatusBar, StyleSheet, Text, View, Image, TouchableWithoutFeedback, ScrollView } from 'react-native';

export default class Arts extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <View style={{backgroundColor: '#B33FF7', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: '#fff', fontWeight: '600', fontSize: 25, textAlign: 'center', marginBottom: 30}}>Select your choice of course for Arts?</Text>
            <View style={{flex: 1, flexDirection: 'row', marginBottom: 30}}>
            <View style={{flex: 1, backgroundColor: '#9D27E1', borderRadius: 100, justifyContent: 'center', alignItems: 'center', width: 30}}>
                <Image source={require('../../assets/images/finance.png')} style={{width: 30, height: 30}} /> 
            </View>
            <View style={{flex: 6, borderRadius: 100, justifyContent: 'center'}}>
                <Text style={{marginLeft: 20, fontSize: 22, fontWeight: "600", marginRight: 20, color: '#fff'}}>Pure Arts</Text>
            </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row', marginBottom: 30}}>
            <View style={{flex: 1, backgroundColor: '#9D27E1', borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../../assets/images/engg.png')} style={{width: 30, height: 30}} /> 
            </View>
            <View style={{flex: 6, borderRadius: 100, justifyContent: 'center'}}>
                <Text style={{marginLeft: 20, fontSize: 22, fontWeight: "600", marginRight: 20, color: '#fff'}}>Film</Text>
            </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row', marginBottom: 30}}>
            <View style={{flex: 1, backgroundColor: '#9D27E1', borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../../assets/images/mgmt.png')} style={{width: 30, height: 30}} /> 
            </View>
            <View style={{flex: 6, borderRadius: 100, justifyContent: 'center'}}>
                <Text style={{marginLeft: 20, fontSize: 22, fontWeight: "600", marginRight: 20, color: '#fff'}}>Design</Text>
            </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row', marginBottom: 30}}>
            <View style={{flex: 1, backgroundColor: '#9D27E1', borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../../assets/images/truck.png')} style={{width: 30, height: 20}} /> 
            </View>
            <View style={{flex: 6, borderRadius: 100, justifyContent: 'center'}}>
                <Text style={{marginLeft: 20, fontSize: 22, fontWeight: "600", marginRight: 20, color: '#fff'}}>Social Science</Text>
            </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row', marginBottom: 30}}>
            <View style={{flex: 1, backgroundColor: '#9D27E1', borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../../assets/images/truck.png')} style={{width: 30, height: 20}} /> 
            </View>
            <View style={{flex: 6, borderRadius: 100, justifyContent: 'center'}}>
                <Text style={{marginLeft: 20, fontSize: 22, fontWeight: "600", marginRight: 20, color: '#fff'}}>Media Communication</Text>
            </View>
            </View>
        </View>
    </>
    );
  }
};