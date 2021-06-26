import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const PoolCard= ({navigation})=> {
  return (
    <TouchableOpacity
      onPress={()=> navigation.navigate('Pool View')}
      style={styles.container}>
      <Text>
        Pool 1
      </Text>
      <Text>
        Author
      </Text>
      <View>
        <Text>
          Nba
        </Text>
        <Text>
          Game Time
        </Text>
        <Text>
          Lakers @ Rams
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
  container: {
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 3,
    flexDirection: 'row',
    flex: 1,
    margin: 25,
  }
})

export default PoolCard
