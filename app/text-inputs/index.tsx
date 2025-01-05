import ThemeCard from '@/presentation/shared/ThemeCard';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedTextInput from '@/presentation/shared/ThemedTextInput';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { View, Text, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

const isIOS = Platform.OS === 'ios'

const TextInputsScreen = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  })

  return (
    <KeyboardAvoidingView behavior={ isIOS?'height':undefined }>

      <ScrollView>

        <ThemedView>
          <ThemeCard className='mb-y-5'>
            <ThemedTextInput onChangeText={(text) => setForm({...form, name: text})} placeholder='Full Name' autoCapitalize={'words'} autoCorrect />

            <ThemedTextInput onChangeText={(text) => setForm({...form, email: text})} placeholder='Email' autoCapitalize={'words'} autoCorrect={false} keyboardType='email-address'/>

            <ThemedTextInput onChangeText={(text) => setForm({...form, phone: text})} placeholder='Phone' autoCorrect={false} keyboardType='phone-pad' />
          </ThemeCard>
          
          <ThemeCard>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemeCard>
        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
