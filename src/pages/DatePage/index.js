import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import {withNavigation, SafeAreaView} from 'react-navigation';
import Slider from './slider.js';
import Dash from 'react-native-dash';

class DatePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 50,
      date: 'Jan 2020',
    }
  }

  updateValue = value => {
    if (value<62) {
      this.setState({
        date: 'Jan 2020',
      });
    }
    else if (value>62 && value<75) {
      this.setState({
        date: 'Jun 2020',
      });
    }
    else if (value>=75 && value<87) {
      this.setState({
        date: 'Sep 2020',
      });
    }
  }
  
  render() {
    const {navigate} = this.props.navigation;

    return (
      <>
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
                  Mar 2021
                </Text>
                <Text style={{color: '#387BFF', fontSize: 20, fontFamily: 'Montserrat-Medium'}}>
                  Dec 2020
                </Text>
                <Text style={{color: '#38BEFD', fontSize: 20, fontFamily: 'Montserrat-Medium'}}>
                  Sep 2020
                </Text>
                <Text style={{color: '#FDB909', fontSize: 20, fontFamily: 'Montserrat-Medium'}}>
                  Jun 2020
                </Text>
                <Text style={{fontSize: 20, fontFamily: 'Montserrat-Medium'}}>
                  Jan 2020
                </Text>
              </View>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Dash dashGap={8} dashLength={8} dashColor='#3D2DE8' style={{width:1, height:'91%', flexDirection:'column', position: 'absolute', flex: 1}}/>
            <Slider updateValue={this.updateValue}/>
            </View>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 20, color: '#3D2DE8', marginTop: 30, marginLeft: 30}}>
                {this.state.date}</Text>
            </View>
          </View>
          <View style={{paddingBottom: 15, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F3F9FF'}}>
            <Button
              buttonStyle={styles.buttonStyle}
              fontFamily="Montserrat-Medium"
              title="SUBMIT"
              onPress={() => navigate('Test')}
            />
          </View>
          </SafeAreaView>
      </>
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

export default withNavigation(DatePage);
