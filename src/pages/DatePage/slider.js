import React from "react";
import {
  LayoutChangeEvent,
  PanResponder,
  PanResponderGestureState, Text
} from "react-native";
import styled from "styled-components";

type StateType = {
  barHeight: number | null,
  deltaValue: number,
  value: number
};

const initialValue = 50;
const min = 50;
const max = 100;
const CIRCLE_DIAMETER = 50;

export default class Slider extends React.Component<{}, StateType> {
  state = {
    barHeight: null,
    deltaValue: 0,
    value: initialValue,
    status: '',
  };

  panResponder = PanResponder.create({
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderMove: (_, gestureState) => this.onMove(gestureState),
    onPanResponderRelease: () => this.onEndMove(),
    onPanResponderTerminate: () => {}
  });

  onMove(gestureState: PanResponderGestureState) {
    const { barHeight } = this.state;
    const newDeltaValue = this.getValueFromBottomOffset(
      -gestureState.dy,
      barHeight,
      min,
      max
    );
    this.setState({
      deltaValue: newDeltaValue
    });
    const { value } = this.state;
    let percent = this.capValueWithinRange(value + newDeltaValue, [
        min,
        max
      ]);
    this.props.updateValue(Math.floor(percent));
  }
  onEndMove() {
    const { value, deltaValue } = this.state;
    this.setState({ value: value + deltaValue, deltaValue: 0 });
  }

  onBarLayout = (event: LayoutChangeEvent) => {
    const { height: barHeight } = event.nativeEvent.layout;
    this.setState({ barHeight });
  };

  capValueWithinRange = (value: number, range: number[]) => {
    if (value < range[0]) return range[0];
    if (value > range[1]) return range[1];
    return value;
  };

  getValueFromBottomOffset = (
    offset: number,
    barHeight: number | null,
    rangeMin: number,
    rangeMax: number
  ) => {
    if (barHeight === null) return 0;
    return ((rangeMax - rangeMin) * offset) / barHeight;
  };

  getBottomOffsetFromValue = (
    value: number,
    rangeMin: number,
    rangeMax: number,
    barHeight: number | null
  ) => {
    if (barHeight === null) return 0;
    const valueOffset = value - rangeMin;
    const totalRange = rangeMax - rangeMin;
    const percentage = valueOffset / totalRange;
    return barHeight * percentage;
  };

  render() {
    const { value, deltaValue, barHeight } = this.state;
    const cappedValue = this.capValueWithinRange(value + deltaValue, [
      min,
      max
    ]);
    const bottomOffset = this.getBottomOffsetFromValue(
      cappedValue,
      min,
      max,
      barHeight
    );
    return (
      <PageContainer>
        <Text style={{color: '#fff', fontFamily: 'Montserrat-Bold'}}>{Math.floor(cappedValue)}</Text>
        <Container>
          <BarContainer>
            <Bar onLayout={this.onBarLayout} />
            <Circle
              bottomOffset={bottomOffset}
              {...this.panResponder.panHandlers}
            ><Text style={{color: '#fff', fontSize: 18, fontWeight: '600', fontFamily: 'Montserrat-SemiBold'}}>{Math.floor(cappedValue)<75?'Decent':'Excellent'}</Text>
        </Circle>
          </BarContainer>
        </Container>
      </PageContainer>
    );
  }
}

const PageContainer = styled.View`
  background-color: transparent;
  flex-grow: 1;
  align-self: stretch;
  align-items: center;
  padding-vertical: 20;
`;

const Container = styled.View`
  flex-grow: 1;
  align-self: stretch;
  justify-content: center;
  flex-direction: row;
`;
const Value = styled.Text`
  color: white;
  font-family: Montserrat-Bold;
`;

const BarContainer = styled.View`
  width: ${CIRCLE_DIAMETER};
  align-items: center;
  padding-vertical: 15;
  margin-horizontal: 20;
`;
const Bar = styled.View`
  width: 2;
  background-color: transparent;
  flex-grow: 1;
  shadow-opacity: 0.75;
  shadow-radius: 5px;
  shadow-color: red;
  shadow-offset: 0px 0px;
`;

const Circle = styled.View`
  border-radius: 30;
  justify-content: center;
  align-items: center;
  width: 100;
  elevation: 15;
  shadow-opacity: 0.3;
  shadow-radius: 10px;
  shadow-color: black;
  shadow-offset: 0px 0px;
  height: 40;
  background-color: #3D2DE8;
  position: absolute;
  bottom: ${props => props.bottomOffset};
`;