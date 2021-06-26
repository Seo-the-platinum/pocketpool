import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Home'
import PoolList from './PoolList'
import PoolView from './PoolView'
import SquareView from './SquareView'

const Stack = createStackNavigator()

const HomeStack= ()=> {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown:true,
      }}>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='Pool List' component={PoolList}/>
      <Stack.Screen name='Pool View' component={PoolView}/>
      <Stack.Screen name='Square View' component={SquareView}/>
    </Stack.Navigator>
  )
}

export default HomeStack
