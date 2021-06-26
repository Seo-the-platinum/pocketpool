import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Square=({number,navigation})=> {
  const [status, setStatus]= useState('')
  const [sold, setSold]= useState(true)

  return(
    <TouchableOpacity
      onPress={()=> navigation.navigate('Square View', {
        number: number,
      })}
      style={
        status == 'winning' ? styles.winningSquare:
        status == 'heating' ? styles.heatingSquare:
        sold == true ? styles.soldSquare : styles.square}>
      <Text>{`No.${number}`}</Text>
    </TouchableOpacity>
  )
}

const styles= StyleSheet.create({
  square: {
    backgroundColor: 'powderblue',
    borderColor: 'black',
    borderWidth: 1,
    height: '10%',
    width: '10%',
  },

  soldSquare: {
    backgroundColor: 'yellow',
    borderColor: 'black',
    borderWidth: 1,
    height: '10%',
    width: '10%',
  },

  heatingSquare: {
    backgroundColor: 'red',
    borderColor: 'black',
    borderWidth: 1,
    height: '10%',
    width: '10%',
  },

  winningSquare: {
    backgroundColor: 'green',
    borderColor: 'black',
    borderWidth: 1,
    height: '10%',
    width: '10%',
  },

})

export default Square
