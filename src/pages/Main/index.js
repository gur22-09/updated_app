import React from 'react';
import { StatusBar, StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import {withNavigation} from 'react-navigation';

class Main extends React.Component {
  static navigationOptions = { header: null };
  render() {
    const {navigate} = this.props.navigation;

    return (
      <>
        <StatusBar barStyle="dark-content" hidden/>
          <View style={styles.body}>
            <View>
              <Image source={require('../../assets/images/launch.png')} style={{marginBottom: 30}} /> 
            </View>
            <View>
              <Text style={{textAlign: 'center', fontSize: 30, fontWeight: 'bold', color: '#fff'}}>Welcome{"\n"} to Meet University</Text>
              <Text style={{textAlign: 'center', fontSize: 15, marginTop: 20, marginBottom: 50, color: '#fff'}}>Looks like you are interested to Study{"\n"}
                abroad. Let us find the right university for you!
              </Text>
            </View>
            <View>
              <Button
                buttonStyle={styles.buttonStyle}
                title="GET STARTED"
                titleStyle={{color: "#414EFF"}}
                onPress={() => this.props.navigation.navigate('Chat')}
              />
            </View>
          </View>
      </>
    );
  }
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#414EFF',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonStyle: {
    width: 180,
    borderRadius: 20,
    elevation: 10,
    backgroundColor: '#fff',
    shadowOpacity: 0.2,
    shadowRadius: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0
    },
  }
});

export default withNavigation(Main);
