import React from 'react';
import { StatusBar, StyleSheet, Text, View, Image, TouchableWithoutFeedback, ScrollView } from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";
import {withNavigation, SafeAreaView} from 'react-navigation';
import Management from '../../components/courseSelect/management';
import Engineering from '../../components/courseSelect/engineering';
import Law from '../../components/courseSelect/law';
import Science from '../../components/courseSelect/science';
import Arts from '../../components/courseSelect/arts';
import { TouchableOpacity } from 'react-native';

class Dashboard extends React.Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    }
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <>
      <StatusBar barStyle="light-content" backgroundColor="#387BFF"/>
      <SafeAreaView style={{flex: 1, backgroundColor: '#F3F9FF'}}>
        <ScrollView contentInsetAdjustmentBehavior='automatic'>
          <View style={{backgroundColor: '#F3F9FF', flex: 1, marginTop: 20}}>
          <RBSheet
            ref={ref => {
              this.RBSheet = ref;
            }}
            height={450}
            duration={250}
            customStyles={{
              container: {
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: '#66C1FF',
                borderRadius: 30,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                padding: 20
              },
              wrapper: {
              }
            }}
          >
            <TouchableOpacity onPress={() => {navigate('Country'); this.RBSheet.close()}}>
              <Management/>
            </TouchableOpacity>
          </RBSheet>
          <RBSheet
            ref={ref => {
              this.RBSheetLaw = ref;
            }}
            height={300}
            duration={250}
            customStyles={{
              container: {
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: '#FA6AA0',
                borderRadius: 30,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                padding: 20
              },
              wrapper: {
              }
            }}
          >
            <TouchableOpacity onPress={() => {navigate('Country'); this.RBSheetLaw.close()}}>
              <Law/>
            </TouchableOpacity>
          </RBSheet>
          <RBSheet
            ref={ref => {
              this.RBSheetScience = ref;
            }}
            height={400}
            duration={250}
            customStyles={{
              container: {
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: '#FFBD4D',
                borderRadius: 30,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                padding: 20
              },
              wrapper: {
              }
            }}
          >
            <TouchableOpacity onPress={() => {navigate('Country'); this.RBSheetScience.close()}}>
              <Science/>
            </TouchableOpacity>
          </RBSheet>
          <RBSheet
            ref={ref => {
              this.RBSheetEngg = ref;
            }}
            height={550}
            duration={250}
            customStyles={{
              container: {
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: '#FF486D',
                borderRadius: 30,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                padding: 20
              },
              wrapper: {
              }
            }}
          >
            <TouchableOpacity onPress={() => {navigate('Country'); this.RBSheetEngg.close()}}>
              <Engineering/>
            </TouchableOpacity>
          </RBSheet>
          <RBSheet
            ref={ref => {
              this.RBSheetArts = ref;
            }}
            height={550}
            duration={250}
            customStyles={{
              container: {
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: '#B33FF7',
                borderRadius: 30,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                padding: 20
              },
              wrapper: {
              }
            }}
          >
            <TouchableOpacity onPress={() => {navigate('Country'); this.RBSheetArts.close()}}>
              <Arts/>
            </TouchableOpacity>
          </RBSheet>
            <View style={{alignSelf: 'flex-start'}}>
              <Text style={{marginLeft: 20, marginTop: 10, fontSize: 30, fontWeight: "600", marginRight: 20, fontFamily: 'Montserrat-SemiBold'}}>What course have you done?</Text>
            </View>
            <View style={{
              flex: 1,
              flexDirection: 'column',
              marginTop: 20,
            }}>
              <View style={styles.box}>
                <TouchableWithoutFeedback onPress={() => {
                  this.RBSheet.open();
                }}>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flex: 1, backgroundColor: '#66C1FF', borderRadius: 20}}>
                  <Image source={require('../../assets/images/mgmt.png')} style={{width: 25, height: 25, marginRight: 20, marginLeft: 20}} /> 
                    <Text style={styles.optionText}>Management</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>   
              <View style={styles.box}>
                <TouchableWithoutFeedback onPress={() => {
                  this.RBSheetEngg.open();
                }}>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flex: 1, backgroundColor: '#FF486D', borderRadius: 20}}>
                  <Image source={require('../../assets/images/engg.png')} style={{width: 30, height: 30, marginRight: 20, marginLeft: 20}} /> 
                    <Text style={styles.optionText}>Engineering</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>    
              <View style={styles.box}>
                <TouchableWithoutFeedback onPress={() => {
                  this.RBSheetScience.open();
                }}>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flex: 1, backgroundColor: '#FFBD4D', borderRadius: 20}}>
                  <Image source={require('../../assets/images/science.png')} style={{width: 30, height: 30, marginRight: 20, marginLeft: 20}} /> 
                    <Text style={styles.optionText}>Science</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>   
              <View style={styles.box}>
                <TouchableWithoutFeedback onPress={() => {
                  this.RBSheetArts.open();
                }}>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flex: 1, backgroundColor: '#B33FF7', borderRadius: 20}}>
                  <Image source={require('../../assets/images/arts.png')} style={{width: 30, height: 30, marginRight: 20, marginLeft: 20}} /> 
                    <Text style={styles.optionText}>Arts</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>     
              <View style={styles.box}>
                <TouchableWithoutFeedback onPress={() => {
                  this.RBSheetLaw.open();
                }}>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flex: 1, backgroundColor: '#FA6AA0', borderRadius: 20}}>
                  <Image source={require('../../assets/images/law.png')} style={{width: 30, height: 30, marginRight: 20, marginLeft: 20}} /> 
                  <Text style={styles.optionText}>Law</Text>
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
