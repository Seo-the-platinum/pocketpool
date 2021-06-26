import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import PoolCard from './PoolCard'

const PoolList = ({navigation})=> {
  return (
    <View style={styles.container}>
      <PoolCard navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderColor: 'green',
    borderWidth: 2,
    flex:1,
    width: '100%',
  }
})
export default PoolList
