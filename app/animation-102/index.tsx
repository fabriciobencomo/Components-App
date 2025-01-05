import { useAnimation } from '@/hooks/useAnimation';
import ThemedView from '@/presentation/shared/ThemedView';
import { View, Text, Animated } from 'react-native';

const Animation102Screen = () => {
  const {pan, panResponder} = useAnimation()

  return (
    <ThemedView className='justify-center items-center flex-1'>
        <Animated.View
          {...panResponder.panHandlers}
          style={[pan.getLayout(), {    
            backgroundColor: '#61dafb',
            width: 80,
            height: 80,
            borderRadius: 4,}]}
        />
    </ThemedView> 
  );
};
export default Animation102Screen;
