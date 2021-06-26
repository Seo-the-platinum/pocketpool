import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from './HomeStack'
import CreatePool from './CreatePool'

const Tab = createBottomTabNavigator()

const HomeTabs = ()=> {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeStack}/>
      <Tab.Screen name='CreatePool' component={CreatePool}/>
    </Tab.Navigator>
  )
}

export default HomeTabs
