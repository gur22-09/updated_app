import React from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";
import { SafeAreaView, withNavigation } from 'react-navigation';
import { Input } from 'react-native-elements';

class Chat extends React.Component {
  static navigationOptions = { header: null };
  state = {
    messages: [],
    showAskName: false,
    showNameReply: false,
    showAskEmail: false,
    showReplyEmail: false,
    showNameInput: false,
    showEmailInput: false,
    name: '',
  }

  handleShow = data => {
    setTimeout(function() {

      if (data==='showAskName') {
        this.setState({
          showAskName: true,
          showNameInput: true,
        })
      }
      else if (data==='showNameReply') {
        this.setState({
          showNameReply: true,
          showNameInput: false,
          showAskEmail: true,
        })
      }

      }.bind(this), 1500)
  }

  nameEntered = data => {
    this.setState({
      name: data,
    })
    this.handleShow('showNameReply');
  }
 
  componentDidMount() {
    this.setState({
      messages: [],
    })
    this.handleShow('showAskName');
  }

  handleEnd({ steps, values }) {
    setTimeout(function() { 
      this.RBSheet.open();     
    }.bind(this), 1000)
  }

  quickReply(messages = []) {
    console.log(messages);
  }

  navigate = () => {
    const {navigate} = this.props.navigation;
    this.RBSheet.close();
    navigate('Profile');
  }
 
  render() {
    return (
      <>
      <StatusBar barStyle="light-content" backgroundColor="#387BFF"/>
      <SafeAreaView style={{flex: 1, backgroundColor: '#D3EDFF'}}>
        <View style={{backgroundColor: '#D3EDFF', flex: 1, marginLeft: 10, marginTop: 10}}>
          <View>
            <Text style={styles.chatStyle}>Hi there!</Text>
          </View>
          {this.state.showAskName ? 
            (<View>
              <Text hide style={styles.chatStyle}>Can you tell us your name?</Text>
            </View>) : null
          }
          {this.state.showNameInput ? 
            (<View>
              <Input containerStyle={styles.inputStyle} onSubmitEditing={(text) => this.nameEntered(text)}
                  placeholder='Your name goes here...'
                />
            </View>) : null
          }
          {this.state.showNameReply ? 
            (<View>
              <Text hide style={styles.chatStyle}>{this.state.name}</Text>
            </View>) : null
          }
          {this.state.showAskEmail ? 
            (<View>
              <Text hide style={styles.chatStyle}>Great name, what is your email address?</Text>
            </View>) : null
          }
          {this.state.showReplyEmail ? 
            (<View>
              <Text hide style={styles.chatStyle}>Can you tell us your name?</Text>
            </View>) : null
          }
          <RBSheet
            ref={ref => {
              this.RBSheet = ref;
            }}
            height={200}
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
            <View style={{backgroundColor: '#fff', flex: 1, justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => this.navigate()} style={{borderStyle: "solid", borderColor: '#547CFA', borderWidth: 2, borderRadius: 100, flex: 1, margin: 5}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', width: 15}}>
                    <Image source={require('../../assets/images/noun_School.png')} style={{width: 15, height: 15, marginLeft: 10}} /> 
                  </View>
                  <Text style={{textAlign: 'center', padding: 10}}>Class XII</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.navigate()} style={{borderStyle: "solid", borderColor: '#547CFA', borderWidth: 2, borderRadius: 100, flex: 1, margin: 5}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', width: 15}}>
                    <Image source={require('../../assets/images/noun_Diploma.png')} style={{width: 15, height: 15, marginLeft: 10}} /> 
                  </View>
                  <Text style={{textAlign: 'center', padding: 10}}>Diploma</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.navigate()} style={{borderStyle: "solid", borderColor: '#547CFA', borderWidth: 2, borderRadius: 100, flex: 1, margin: 5}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', width: 15}}>
                    <Image source={require('../../assets/images/grad.png')} style={{width: 15, height: 15, marginLeft: 10}} /> 
                  </View>
                  <Text style={{textAlign: 'center', padding: 10}}>PG Diploma</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{backgroundColor: '#fff', flex: 1, justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row'}}>
              <TouchableOpacity onPress={() => this.navigate()} style={{borderStyle: "solid", borderColor: '#547CFA', borderWidth: 2, borderRadius: 100, flex: 1, margin: 10}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', width: 15}}>
                    <Image source={require('../../assets/images/noun_graduation.png')} style={{width: 15, height: 15, marginLeft: 10}} /> 
                  </View>
                  <Text style={{textAlign: 'center', padding: 10}}>Under Graduate</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.navigate()} style={{borderStyle: "solid", borderColor: '#547CFA', borderWidth: 2, borderRadius: 100, flex: 1, margin: 10}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', width: 15}}>
                    <Image source={require('../../assets/images/graduate.png')} style={{width: 15, height: 15, marginLeft: 10}} /> 
                  </View>
                  <Text style={{textAlign: 'center', padding: 10}}>Post Graduate</Text>
                </View>
              </TouchableOpacity>
            </View>
          </RBSheet>
        </View>
      </SafeAreaView>
      </>
    )
  }
}

const styles = StyleSheet.create({
  chatStyle: {
    padding: 10, 
    margin: 10,
    backgroundColor: '#fff', 
    alignSelf: 'flex-start', 
    borderRadius: 12, 
    overflow: 'hidden'
  },
  replyStyle: {
    padding: 10, 
    margin: 10,
    backgroundColor: '#fff', 
    alignSelf: 'flex-end', 
    borderRadius: 12, 
    overflow: 'hidden',
  },
  inputStyle: {
    maxWidth: '60%',
    padding: 10, 
    margin: 10,
    alignSelf: 'flex-end', 
    borderRadius: 12, 
    overflow: 'hidden',
  },
  body: {
    backgroundColor: '#D3EDFF',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bubble: {
    margin: 10
  },
  background: {
    backgroundColor: '#D3EDFF'
  }
});

export default withNavigation(Chat)