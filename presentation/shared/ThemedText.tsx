import { View, Text, TextProps } from 'react-native'
import React, { Children } from 'react'

interface Props extends TextProps {
  className?: string;
  type?: 'normal' | 'h1' | 'h2' | 'semi-bold' | 'link'

}

const ThemedText = ({className, type, ...rest}: Props) => {
  return (
      <Text 
        className={[
          type === 'normal' ? 'font-normal' : undefined,
          type === 'h1' ? 'text-3xl' : undefined,
          type === 'h2' ? 'text-xl' : undefined,
          type === 'semi-bold' ? 'font-semibold' : undefined,
          type === 'link' ? 'font-normal underline' : undefined,
          'text-light-text dark:text-dark-text',
        , className].join(' ') }
      {...rest} />
  )
}

export default ThemedText