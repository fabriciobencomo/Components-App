import { useThemeColor } from '@/hooks/useThemeColor';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { View, Text } from 'react-native';
import { RefreshControl, ScrollView } from 'react-native-gesture-handler';

const PullToRefreshScreen = () => {

  const primaryColor = useThemeColor({}, 'primary')

  const [isRefreshing, setIsRefreshing] = useState(false)

  const onRefresh = async () => {
    setIsRefreshing(true)

    setTimeout(() =>{
      setIsRefreshing(false)
    }, 3000)
  }

  return (
    <ScrollView 
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} colors={[primaryColor, 'red', 'orange', 'green']}/>
      }
    >
      <ThemedView margin>
        <ThemedText>Hola</ThemedText>
      </ThemedView>
    </ScrollView>
  );
};
export default PullToRefreshScreen;
