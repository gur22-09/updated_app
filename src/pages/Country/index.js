import React from 'react';
import { StatusBar, StyleSheet, Text, View, Image, TouchableWithoutFeedback, ScrollView } from 'react-native';
import {withNavigation, SafeAreaView} from 'react-navigation';
import RBSheet from "react-native-raw-bottom-sheet";

class Dashboard extends React.Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    }
  }

  componentDidMount = () => {
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <>
      <StatusBar barStyle="light-content" backgroundColor="#387BFF"/>
      <SafeAreaView style={{flex: 1, backgroundColor: '#F3F9FF'}}>
        <ScrollView contentInsetAdjustmentBehavior='automatic'>
          <View style={{backgroundColor: '#F3F9FF', flex: 1, marginTop: 20}}>
            <View style={{alignSelf: 'flex-start'}}>
              <Text style={{marginLeft: 20, marginTop: 10, fontSize: 30, fontWeight: "600", marginRight: 20, fontFamily: 'Montserrat-SemiBold'}}>Which country are you looking at to study?</Text>
            </View>
            <View style={{
              flex: 1,
              flexDirection: 'column',
              marginTop: 20,
            }}>
              <View style={styles.box}>
                <TouchableWithoutFeedback onPress={() => {navigate('DatePage')
                }}>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flex: 1, backgroundColor: '#CF455C', borderRadius: 20}}>
                  <Image source={require('../../assets/images/us.png')} style={{width: 40, height: 40, marginRight: 20, marginLeft: 20}} /> 
                    <Text style={styles.optionText}>USA</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>   
              <View style={styles.box}>
                <TouchableWithoutFeedback onPress={() => {navigate('DatePage')
                }}>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flex: 1, backgroundColor: '#C76ABE', borderRadius: 20}}>
                  <Image source={require('../../assets/images/british-flag.png')} style={{width: 40, height: 40, marginRight: 20, marginLeft: 20}} /> 
                    <Text style={styles.optionText}>UK</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>    
              <View style={styles.box}>
                <TouchableWithoutFeedback onPress={() => {navigate('DatePage')
                }}>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flex: 1, backgroundColor: '#FFDD67', borderRadius: 20}}>
                  <Image source={require('../../assets/images/flag-button.png')} style={{width: 40, height: 40, marginRight: 20, marginLeft: 20}} /> 
                    <Text style={styles.optionText}>Canada</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>   
              <View style={styles.box}>
                <TouchableWithoutFeedback onPress={() => {navigate('DatePage')
                }}>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flex: 1, backgroundColor: '#FF8A5C', borderRadius: 20}}>
                  <Image source={require('../../assets/images/flag-round.png')} style={{width: 40, height: 40, marginRight: 20, marginLeft: 20}} /> 
                    <Text style={styles.optionText}>France</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>     
              <View style={styles.box}>
                <TouchableWithoutFeedback onPress={() => {navigate('DatePage')
                }}>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flex: 1, backgroundColor: '#407588', borderRadius: 20}}>
                  <Image source={require('../../assets/images/flag-round-250.png')} style={{width: 40, height: 40, marginRight: 20, marginLeft: 20}} /> 
                  <Text style={styles.optionText}>Australia</Text>
                </View>
                </TouchableWithoutFeedback>
              </View>     
            </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  box: {
    margin: 30,
    marginTop: 15,
    marginBottom: 20,
    height: 80,
    elevation: 12,
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0
    },
  },
  optionText: {
    color: '#fff', 
    fontWeight: '600', 
    fontSize: 22,
    fontFamily: 'Montserrat-Regular'
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

export default withNavigation(Dashboard);
