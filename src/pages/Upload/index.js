import React from 'react';
import { StatusBar, StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import {withNavigation} from 'react-navigation';

class Upload extends React.Component {
  static navigationOptions = { header: null };
  render() {
    const {navigate} = this.props.navigation;

    return (
      <>
        <StatusBar barStyle="dark-content" hidden/>
          <View style={styles.body}>
            <View>
              <Image source={require('../../assets/images/thanks.png')} style={{marginBottom: 30}} /> 
            </View>
            <View>
              <Text style={{textAlign: 'center', fontSize: 30, fontWeight: 'bold', color: '#828894'}}>Thanks For Chatting with us</Text>
              <Text style={{textAlign: 'center', fontSize: 15, marginTop: 20, marginBottom: 50, color: '#A7A8AA'}}>Your Details are saved Succesfully. Our representative will contact you shortly.</Text>
            </View>
            <View>
              <Button
                buttonStyle={styles.buttonStyle}
                title="Proceed to Upload Documents"
                titleStyle={{color: "#fff", padding: 25}}
                // onPress={() => this.props.navigation.navigate('Chat')}
              />
            </View>
          </View>
      </>
    );
  }
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#D3EDFF',
    padding: 20,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonStyle: {
    borderRadius: 20,
    elevation: 10,
    backgroundColor: '#414EFF',
    shadowOpacity: 0.2,
    shadowRadius: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0
    },
  }
});

export default withNavigation(Upload);
