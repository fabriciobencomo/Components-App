import ThemeCard from '@/presentation/shared/ThemeCard';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedTextInput from '@/presentation/shared/ThemedTextInput';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

const TextInputsScreen = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  })

  return (
    <ThemedView>
      <ThemeCard className='mb-y-5'>
        <ThemedTextInput onChangeText={(text) => setForm({...form, name: text})} placeholder='Full Name' autoCapitalize={'words'} autoCorrect />
      </ThemeCard>


      <ThemeCard>
        <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
      </ThemeCard>
    </ThemedView>
  );
};
export default TextInputsScreen;
