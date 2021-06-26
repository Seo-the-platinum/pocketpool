import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HomeStack from './HomeStack'
import Login from './Login'
import HomeTabs from './HomeTabs'

//will route us to auth0 to login or create account in the future
const Root = ()=> {
  const [signedIn, signIn] = useState(false)

  return (
    <View style={styles.container}>
      {!signedIn ? <HomeTabs/> :
      <Login/>}
    </View>
  )
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  }
})

export default Root
