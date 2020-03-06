import React from 'react';
import { StatusBar, StyleSheet, Text, View, Image, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {withNavigation, SafeAreaView} from 'react-navigation';

class Engineering extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <>
        <View style={{backgroundColor: '#FF486D', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: '#fff', fontWeight: '600', fontSize: 25, textAlign: 'center', marginBottom: 30}}>Select your choice of course for Engineering?</Text>
            <View style={{flex: 1, flexDirection: 'row', marginBottom: 30}}>
                {/* <TouchableOpacity onPress={() => navigate('Country')} style={{flex: 1, flexDirection: 'row'}}> */}
                    <View style={{flex: 1, backgroundColor: '#DF2349', borderRadius: 100, justifyContent: 'center', alignItems: 'center', width: 30}}>
                        <Image source={require('../../assets/images/chip.png')} style={{width: 30, height: 30}} /> 
                    </View>
                    <View style={{flex: 6, borderRadius: 100, justifyContent: 'center'}}>
                        <Text style={{marginLeft: 20, fontSize: 22, fontWeight: "600", marginRight: 20, color: '#fff'}}>IT &amp; Computer</Text>
                    </View>
                {/* </TouchableOpacity> */}
            </View>
            <View style={{flex: 1, flexDirection: 'row', marginBottom: 30}}>
            <View style={{flex: 1, backgroundColor: '#DF2349', borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../../assets/images/solar-energy.png')} style={{width: 30, height: 30}} /> 
            </View>
            <View style={{flex: 6, borderRadius: 100, justifyContent: 'center'}}>
                <Text style={{marginLeft: 20, fontSize: 22, fontWeight: "600", marginRight: 20, color: '#fff'}}>Electrical</Text>
            </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row', marginBottom: 30}}>
            <View style={{flex: 1, backgroundColor: '#DF2349', borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../../assets/images/noun_Civil-Engineer.png')} style={{width: 30, height: 30}} /> 
            </View>
            <View style={{flex: 6, borderRadius: 100, justifyContent: 'center'}}>
                <Text style={{marginLeft: 20, fontSize: 22, fontWeight: "600", marginRight: 20, color: '#fff'}}>Civil &amp; Structural</Text>
            </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row', marginBottom: 30}}>
            <View style={{flex: 1, backgroundColor: '#DF2349', borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../../assets/images/Page-1.png')} style={{width: 30, height: 20}} /> 
            </View>
            <View style={{flex: 6, borderRadius: 100, justifyContent: 'center'}}>
                <Text style={{marginLeft: 20, fontSize: 22, fontWeight: "600", marginRight: 20, color: '#fff'}}>Petroleum &amp; Chemical</Text>
            </View>
            </View>
            <View style={{flex: 1, flexDirection: 'row', marginBottom: 30}}>
            <View style={{flex: 1, backgroundColor: '#DF2349', borderRadius: 100, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('../../assets/images/robot.png')} style={{width: 30, height: 20}} /> 
            </View>
            <View style={{flex: 6, borderRadius: 100, justifyContent: 'center'}}>
                <Text style={{marginLeft: 20, fontSize: 22, fontWeight: "600", marginRight: 20, color: '#fff'}}>Mech &amp; Automation</Text>
            </View>
            </View>
        </View>
    </>
    );
  }
};

export default withNavigation(Engineering);