import React from 'react';
import { StatusBar, StyleSheet, Text, View, Image, TouchableWithoutFeedback, ScrollView } from 'react-native';
import {withNavigation, SafeAreaView} from 'react-navigation';
import RBSheet from "react-native-raw-bottom-sheet";
import { Input, Button } from 'react-native-elements';

class Test extends React.Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    }

  showBottom = () => {
    this.RBSheet.open();
  }

  componentDidMount = () => {
    this.RBSheetCountry.open()
  }

  countryChoose = () => {
    // this.RBSheet.close();
    this.RBSheetCountry.open();
  }

}

  render() {
    const {navigate} = this.props.navigation;

    return (
      <>
      <StatusBar barStyle="light-content" backgroundColor="#387BFF"/>
      <SafeAreaView style={{flex: 1, backgroundColor: '#F3F9FF'}}>
      <RBSheet
            ref={ref => {
              this.RBSheet = ref;
            }}
            height={180}
            duration={400}
            customStyles={{
              container: {
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: '#fff',
                borderRadius: 30,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                padding: 20
              },
              wrapper: {
              }
            }}
          >
            <Text style={{marginBottom: 20, fontSize: 18, width: '70%', marginRight: 'auto'}}>How much did you score in your IELTS exam (out of 9)?</Text>
            <View style={{flexDirection: 'row', marginRight: 'auto'}}>
              <View style={{flex: 2}}>
                <Input placeholder='Type here' inputContainerStyle={{borderBottomWidth: 0, backgroundColor: '#F2F2F2', color: '#0000005E', padding: 5, paddingLeft: 10, paddingRight: 10, borderRadius: 100}}/>
              </View>
              <View style={{flex: 1}}>
              <Button
                  title="Submit"
                  buttonStyle={styles.buttonStyle}
                  onPress={() => {navigate('Upload'); this.RBSheet.close()}}
                />
              </View>
            </View>
        </RBSheet>

        <RBSheet
            ref={ref => {
              this.RBSheetCountry = ref;
            }}
            height={180}
            duration={400}
            customStyles={{
              container: {
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: '#fff',
                borderRadius: 30,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                padding: 20
              },
              wrapper: {
              }
            }}
          >
            <Text style={{marginBottom: 20, fontSize: 18, width: '70%', marginRight: 'auto'}}>Which Country are you looking at?</Text>
            <View style={{flexDirection: 'row', marginRight: 'auto'}}>
              <View style={{flex: 2}}>
                <Input placeholder='Type here' inputContainerStyle={{borderBottomWidth: 0, backgroundColor: '#F2F2F2', color: '#0000005E', padding: 5, paddingLeft: 10, paddingRight: 10, borderRadius: 100}}/>
              </View>
              <View style={{flex: 1}}>
              <Button
                  title="Submit"
                  buttonStyle={styles.buttonStyle}
                  onPress={() => navigate('Upload')}
                />
              </View>
            </View>
        </RBSheet>

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
                <TouchableWithoutFeedback onPress={() => {showBottom()
                }}>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flex: 1, backgroundColor: '#F04F43', borderRadius: 20}}>
                  <Image source={require('../../assets/images/noun_graduate.png')} style={{width: 23, height: 15, marginRight: 20, marginLeft: 20}} /> 
                    <Text style={styles.optionText}>IELTS</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>   
              <View style={styles.box}>
              <TouchableWithoutFeedback onPress={() => {showBottom()
                }}>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flex: 1, backgroundColor: '#3464DD', borderRadius: 20}}>
                  <Image source={require('../../assets/images/noun_open_book.png')} style={{width: 23, height: 22, marginRight: 20, marginLeft: 20}} /> 
                    <Text style={styles.optionText}>PTE</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>    
              <View style={styles.box}>
              <TouchableWithoutFeedback onPress={() => {showBottom()
                }}>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flex: 1, backgroundColor: '#F65663', borderRadius: 20}}>
                  <Image source={require('../../assets/images/noun_Book.png')} style={{width: 23, height: 21, marginRight: 20, marginLeft: 20}} /> 
                    <Text style={styles.optionText}>TOEFL</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>   
              <View style={styles.box}>
              <TouchableWithoutFeedback onPress={() => {showBottom()
                }}>
                  <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flex: 1, backgroundColor: '#F1C948', borderRadius: 20}}>
                  <Image source={require('../../assets/images/noun_none.png')} style={{width: 20, height: 20, marginRight: 20, marginLeft: 20}} /> 
                    <Text style={styles.optionText}>NONE</Text>
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
    borderRadius: 20,
    elevation: 10,
    backgroundColor: '#414EFF',
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

export default withNavigation(Test);
