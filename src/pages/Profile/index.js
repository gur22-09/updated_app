import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import {withNavigation, SafeAreaView} from 'react-navigation';
import Slider from './slider.js';
import Dash from 'react-native-dash';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 50,
    }
  }

  updateValue = value => {
    this.setState({
      value: value
    });
  }
  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={{ flex: 1, backgroundColor: '#F3F9FF'}}>
        <StatusBar barStyle="light-content" backgroundColor="#387BFF"/>
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.container}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
                paddingVertical: 30,
                alignItems: 'center'
              }}>
                <Text style={{color: '#FF509D', fontSize: 20, fontFamily: 'Montserrat-Medium'}}>
                  90 - 100%
                </Text>
                <Text style={{color: '#387BFF', fontSize: 20, fontFamily: 'Montserrat-Medium'}}>
                  80 - 90%
                </Text>
                <Text style={{color: '#38BEFD', fontSize: 20, fontFamily: 'Montserrat-Medium'}}>
                  70 - 80%
                </Text>
                <Text style={{color: '#FDB909', fontSize: 20, fontFamily: 'Montserrat-Medium'}}>
                  60 - 70%
                </Text>
                <Text style={{fontSize: 20, fontFamily: 'Montserrat-Medium'}}>
                  50 - 60%
                </Text>
              </View>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Dash dashGap={8} dashLength={8} dashColor='#3D2DE8' style={{width:1, height:'91%', flexDirection:'column', position: 'absolute', flex: 1}}/>
            <Slider updateValue={this.updateValue}/>
            </View>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 30, color: '#3D2DE8', marginTop: 30, marginLeft: 30}}>
                {this.state.value}%</Text>
            </View>
          </View>
          <View style={{paddingBottom: 15, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F3F9FF'}}>
            <Button
              buttonStyle={styles.buttonStyle}
              fontFamily="Montserrat-Medium"
              title="SUBMIT"
              onPress={() => navigate('Dashboard')}
            />
          </View>
          </SafeAreaView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  body: {
    // fontFamily: 'Montserrat-Regular',
    backgroundColor: '#F3F9FF',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonStyle: {
    width: 180,
    borderRadius: 20,
    elevation: 10,
    backgroundColor: '#414EFF',
  },
  container: {
    backgroundColor: '#F3F9FF',
    flexDirection: 'row',
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "stretch",
    justifyContent: "center"
  }
});

export default withNavigation(Profile);
