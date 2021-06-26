import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PoolCollections from './PoolCollections'

const Home = ({navigation})=> {
  return (
    <View style={styles.container}>
      <View>
        <Text> Live Pools</Text>
        <PoolCollections navigation={navigation}/>
      </View>
      <View>
        <Text> Upcoming Pools</Text>
        <PoolCollections navigation={navigation}/>
      </View>
      <View>
        <Text> Past Pools</Text>
        <PoolCollections navigation={navigation}/>
      </View>
    </View>
  )
}

const styles= StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flex:1,
    borderWidth: 1,
    width: '100%'
  },
})
export default Home
