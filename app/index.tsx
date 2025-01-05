import { View, Text } from 'react-native'
import React from 'react'
import { Href, Link } from 'expo-router'
import { animationMenuRoutes, menuRoutes, uiMenuRoutes } from '@/constants/Routes'
import ThemedView from '@/presentation/shared/ThemedView'
import MenuItem from '@/presentation/menu/MenuItem'

const index = () => {
  return (
    <ThemedView margin>
      {
        animationMenuRoutes.map((route, index) => (
          <MenuItem 
                    key={route.title}
                    title={route.title} 
                    name={route.name} 
                    icon={route.icon}
                    isFirst={index === 0 ? true : false}
                    isLast={index === animationMenuRoutes.length - 1}
          />
        ))
      }
      <View className='my-3' />
      {
        uiMenuRoutes.map((route, index) => (
          <MenuItem 
                    key={route.title}
                    title={route.title} 
                    name={route.name} 
                    icon={route.icon}
                    isFirst={index === 0 ? true : false}
                    isLast={index === animationMenuRoutes.length - 1}
          />
        ))
      }     
      <View className='my-3' />
      {
        menuRoutes.map((route, index) => (
          <MenuItem 
                    key={route.title}
                    title={route.title} 
                    name={route.name} 
                    icon={route.icon}
                    isFirst={index === 0 ? true : false}
                    isLast={index === animationMenuRoutes.length - 1}
          />
        ))
      }
    </ThemedView>
  )
}

export default index