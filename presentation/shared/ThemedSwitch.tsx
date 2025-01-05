import { View, Text, Switch, Pressable, Platform } from 'react-native'
import React from 'react'
import ThemedText from './ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';

interface Props {
  text?: string;
  value: boolean;
  className?: string;

  onValueChange: (value: boolean) => void;
}

const isAdroind = Platform.OS ===  'android';

const ThemedSwitch = ({value, className, onValueChange, text}: Props) => {

  const switchActiveColor = useThemeColor({}, 'primary')

  return (
    <Pressable className={`flex flex-row mx-2 items-center justify-between active:opacity-80 ${className}`} onPress={() => {onValueChange(!value)}}>
        {text ? <ThemedText type='h2'>{text}</ThemedText> : <View />}
        <Switch 
          value={value}
          onValueChange={onValueChange}
          thumbColor={isAdroind ? switchActiveColor : ''}
        />
    </Pressable>
  )
}

export default ThemedSwitch