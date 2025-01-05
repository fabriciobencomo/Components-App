import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedView from '@/presentation/shared/ThemedView';
import { View, Text } from 'react-native';

const Animation101Screen = () => {
  return (
    <ThemedView>
      <ThemedButton className='mb-5' onPress={() => console.log('fadein')}>
        Fade In
      </ThemedButton>

      <ThemedButton className='mb-5' onPress={() => console.log('fadeout')}>
        Fade Out
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
