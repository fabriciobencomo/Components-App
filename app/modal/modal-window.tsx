import { View, Text, Platform } from 'react-native'
import React from 'react'
import ThemedView from '@/presentation/shared/ThemedView'
import ThemedText from '@/presentation/shared/ThemedText'
import { StatusBar } from 'expo-status-bar'
import { router } from 'expo-router'
import ThemedButton from '@/presentation/shared/ThemedButton'

const ModalScreen = () => {
  return (
    <ThemedView margin className='justify-center items-center flex-1' bgColor='#A52182'>
      <ThemedText>ModalScreen</ThemedText>
      <ThemedButton onPress={() => router.push('/modal/modal-window2')}>Abrir modal 2</ThemedButton>
      <ThemedButton onPress={() => router.back()}>Cerrar</ThemedButton>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </ThemedView>
  )
}

export default ModalScreen