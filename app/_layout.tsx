import { DarkTheme, DefaultTheme, ThemeProvider, useTheme } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import '../global.css'
import { useThemeColor } from '@/hooks/useThemeColor';
import ThemedView from '@/presentation/shared/ThemedView';
import ThemedText from '@/presentation/shared/ThemedText';
import { allRoutes } from '@/constants/Routes';
import { ThemeChangerProvider } from '@/presentation/components/context/ThemeChangerContext';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const backgroundColor = useThemeColor({}, 'background')
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ backgroundColor: backgroundColor, flex: 1}}>
      <ThemeChangerProvider>
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor: backgroundColor
            },
            headerStyle: {
              backgroundColor: backgroundColor
            } 
          }}
        >
          <Stack.Screen name='index' options={{title: ''}}/>
          {
            allRoutes.map(route => (
              <Stack.Screen key={route.name} name={route.name} options={{
                title: route.title,
                headerShown: route.title === 'Slides' ? false : true
              }}/>
            ))
          }
        </Stack>
      </ThemeChangerProvider>
    </GestureHandlerRootView>
  );
}
