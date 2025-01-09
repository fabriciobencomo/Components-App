import ThemeCard from '@/presentation/shared/ThemeCard';
import ThemedSwitch from '@/presentation/shared/ThemedSwitch';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { View, Text } from 'react-native';
import {colorScheme, useColorScheme} from 'nativewind'

const ThemesScreen = () => {

   const {colorScheme, setColorScheme } = useColorScheme()

  const [darkModeSettings, setdarkModeSettings] = useState({
    darkMode: colorScheme === 'dark',
    systemMode: false
  })

  const setDarkMode = (value: boolean) => {
    setColorScheme( value ? 'dark' : 'light')
    setdarkModeSettings({
      darkMode: value,
      systemMode: false
    })
  }

  const setSystemMode = (value: boolean) => {
    setdarkModeSettings({
      darkMode: darkModeSettings.darkMode,
      systemMode: value
    })
  }

  return (
    <ThemedView>
      <ThemeCard>
        <ThemedSwitch value={darkModeSettings.darkMode} text='Dark Mode' className='mb-5' onValueChange={setDarkMode}/>
        <ThemedSwitch value={darkModeSettings.systemMode} text='System Mode' className='mb-5' onValueChange={setSystemMode}/>
      </ThemeCard>
    </ThemedView>
  );
};
export default ThemesScreen;
