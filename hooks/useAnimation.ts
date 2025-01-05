import React, { useRef } from 'react'
import { Animated, Easing, PanResponder } from 'react-native';

export const useAnimation = () => {

    const animatedOpacity = useRef(new Animated.Value(0)).current
    const animatedTop = useRef(new Animated.Value(0)).current;
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {
          dx: pan.x, // x,y are Animated.Value
          dy: pan.y,
        },
      ]),
      onPanResponderRelease: () => {
        Animated.spring(
          pan, // Auto-multiplexed
          {toValue: {x: 0, y: 0}, useNativeDriver: false}, // Back to zero
        ).start();
      },
    });
  
    const fadeIn = ({duration = 300, toValue = 1, useNativeDriver=true, easing = Easing.linear, callback = () => {}}) => {
      Animated.timing(animatedOpacity, {
        toValue: toValue,
        duration: duration,
        useNativeDriver: useNativeDriver,
        easing: easing
      }).start(callback)
    }
  
    const fadeOut = ({duration = 300, toValue = 0, useNativeDriver=true, easing = Easing.ease, callback = () => {}}) => {
      Animated.timing(animatedOpacity, {
        toValue: toValue,
        duration: duration,
        useNativeDriver: useNativeDriver
      }).start(callback)

    }

    const startMovingTopPosition = ({initialPosition=-100 ,duration = 700, toValue = 0, useNativeDriver=true, easing = Easing.elastic(2), callback = () => {}}) => {
      animatedTop.setValue(initialPosition)
      Animated.timing(animatedTop, {
        toValue: toValue,
        duration: duration,
        useNativeDriver: useNativeDriver,
        easing: easing
      }).start(callback)
    }

  return{
    // Props
    animatedTop,
    animatedOpacity,
    pan,

    //Methods
    fadeIn,
    fadeOut,
    startMovingTopPosition,
    panResponder
  }
}
