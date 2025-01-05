import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedView from '@/presentation/shared/ThemedView';
import { router } from 'expo-router';
import { useRef } from 'react';
import { View, Text, Animated, Easing } from 'react-native';


const Animation101Screen = () => {

  const animatedOpacity = useRef(new Animated.Value(0)).current
  const animatedTop = useRef(new Animated.Value(-100)).current;

  const fadeIn = () => {
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true
    }).start()

    Animated.timing(animatedTop, {
      toValue: 0,
      duration: 700,
      useNativeDriver: true,
      easing: Easing.elastic(2)
    }).start()
  }

  const fadeOut = () => {
    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true
    }).start()

    Animated.timing(animatedTop, {
      toValue: -100,
      duration: 700,
      useNativeDriver: true
    }).start()
  }

  return (
    <ThemedView className='justify-center items-center flex-1'>
      <Animated.View className='bg-light-secondary dark:bg-dark-secondary rounded-xl' style={{width: 150, height:150, opacity:animatedOpacity, transform: [{
        translateY: animatedTop
      }]}} />
      <ThemedButton className='my-5' onPress={fadeIn}>
        Fade In
      </ThemedButton>

      <ThemedButton className='my-5' onPress={fadeOut}>
        Fade Out
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
