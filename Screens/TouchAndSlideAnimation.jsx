import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

class TouchAndSlideAnimation extends Component {
  constructor(props) {
    super(props);

    this.translateX = new Animated.Value(0);
    this.panGestureHandler = React.createRef();
  }

  onPanGestureEvent = Animated.event(
    [{ nativeEvent: { translationX: this.translateX } }],
    { useNativeDriver: false }
  );

  onPanHandlerStateChange = (event) => {
    if (event.nativeEvent.state === State.END) {
      Animated.spring(this.translateX, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
    }
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <PanGestureHandler
          ref={this.panGestureHandler}
          onGestureEvent={this.onPanGestureEvent}
          onHandlerStateChange={this.onPanHandlerStateChange}
        >
          <Animated.View
            style={{
              width: 100,
              height: 100,
              backgroundColor: 'blue',
              transform: [{ translateX: this.translateX }],
            }}
          />
        </PanGestureHandler>
      </View>
    );
  }
}

export default TouchAndSlideAnimation;
