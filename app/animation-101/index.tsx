import { useAnimation } from '@/hooks/useAnimation';
import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedView from '@/presentation/shared/ThemedView';
import { router } from 'expo-router';
import { useRef } from 'react';
import { View, Text, Animated, Easing } from 'react-native';


const Animation101Screen = () => {

  const {animatedOpacity, animatedTop, fadeIn, fadeOut, startMovingTopPosition } = useAnimation()

  return (
    <ThemedView className='justify-center items-center flex-1'>
      <Animated.View className='bg-light-secondary dark:bg-dark-secondary rounded-xl' style={{width: 150, height:150, opacity:animatedOpacity, transform: [{
        translateY: animatedTop
      }]}} />
      <ThemedButton className='my-5' onPress={() => {     
        fadeIn({})
        startMovingTopPosition({});     
      }}>
        Fade In
      </ThemedButton>

      <ThemedButton className='my-5' onPress={() => fadeOut({})}>
        Fade Out
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
