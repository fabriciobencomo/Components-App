import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { colorScheme, useColorScheme } from "nativewind";
import { Children, createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ThemeChangerContextType {
  currentTheme: 'light' | 'dark'
  isSystemTheme: boolean

  toggleTheme: () => void;
  setSystemTheme: () => void;
}

const ThemeChangerContext = createContext({} as ThemeChangerContextType)

// custom Hook para acceder al ThemeChangerContetxt

export const useThemeChangerContext = () => {
  const themeChanger = useContext( ThemeChangerContext )

  return themeChanger
}

// Provider 
export const ThemeChangerProvider = ({children} : PropsWithChildren) => {

  const{colorScheme, setColorScheme} = useColorScheme()
  
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark')
  const [isSystemModeEnabled, setIsSystemModeEnabled] = useState(true)

  const currentTheme = isSystemModeEnabled
  ? colorScheme
  : (isDarkMode) ? 'dark' : 'light' 

  useEffect(() => {
    AsyncStorage.getItem('selected-theme').then((theme) => {
      if(!theme) return;
      setIsDarkMode(theme === 'dark')
      setIsSystemModeEnabled(theme === 'system')
      setColorScheme(theme as 'light'|'dark'|'system')
    })
  }, [])
  

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>

      <ThemeChangerContext.Provider value={{
        currentTheme: currentTheme ?? 'light',
        isSystemTheme: isSystemModeEnabled,

        toggleTheme: async() => {
          setIsDarkMode(!isDarkMode)
          setColorScheme( isDarkMode ? 'light' : 'dark');
          setIsSystemModeEnabled(false)

          // TODO: GUARDAR EN STORAGE
          await AsyncStorage.setItem('selected-theme', isDarkMode ? 'light' : 'dark')
        },

        setSystemTheme: async() => {
            setIsSystemModeEnabled(true)
            setColorScheme('system')
            await AsyncStorage.setItem('selected-theme', 'system')
        },
      }}>
        {children}
      </ThemeChangerContext.Provider>
    </ThemeProvider>
  )
}