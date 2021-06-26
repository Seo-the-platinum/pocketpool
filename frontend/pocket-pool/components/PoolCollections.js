import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const PoolCollections=({navigation})=> {
  return (
    <TouchableOpacity
      onPress={()=> navigation.navigate('Pool List')}
      style={styles.container}>
      <Text> Some Collection here</Text>
    </TouchableOpacity>
  )
}

const styles= StyleSheet.create({
  container: {
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 2,
  }
})
export default PoolCollections
