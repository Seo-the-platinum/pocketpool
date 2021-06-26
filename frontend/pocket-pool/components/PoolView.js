import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Square from './Square'

const PoolView = ({navigation})=> {
  const [data, setData]= useState({
    closed: false,
    aNums: [],
    bNums:[],
  })
  const list = Array.from(Array(100).keys())

  const generateNums= ()=> {
    const aNums = Array.from(Array(10).keys())
    const bNums = Array.from(Array(10).keys())
    const sortedA = aNums.sort(()=> Math.random() - 0.5)
    const sortedB = bNums.sort(()=> Math.random() - 0.5)
    setData({
      ...data,
      aNums: sortedA,
      bNums: sortedB,
    })
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text> Budgets pool</Text>
        {!data.closed ? (
          <TouchableOpacity onPress={generateNums}>
            <Text>
              Generate Numbers
            </Text>
          </TouchableOpacity>): (null)}
          <View>
            <Text>15:00</Text>
            <Text>1st QTR</Text>
          </View>
      </View>
      <View style={styles.leftSide}>
        <Text style={styles.leftText}> Rams </Text>
        <View style={styles.aNums}>
          {data.aNums.map(i=> {
            return(
              <Text style={styles.number}>{i}</Text>
            )
          })}
        </View>
      </View>
      <View style={styles.topSide}>
        <Text style={styles.topText}> Chiefs </Text>
        <View style={styles.bNums}>
          {data.bNums.map(i=> {
            return(
              <Text style={styles.number}>{i}</Text>
            )
          })}
        </View>
      </View>
      <View style={styles.squareContainer}>
        {list.map(i=> {
          return(
            <Square number={i+1} navigation={navigation}/>
          )
        })}
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
  aNums: {
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    height: '100%',
    width: '20%',
    borderRightColor:'black',
    borderRightWidth: 2,
  },

  bNums: {
    justifyContent:'space-around',
    height: '30%',
    flexDirection: 'row',
    width: '100%'
  },

  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  leftSide: {
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      height: '80%',
      width: '20%',
      marginTop:'11%'
  },

  leftText: {
      fontSize: 30,
  },

  header: {
      alignSelf: 'flex-start',
      justifyContent: 'space-around',
      flexDirection: 'row',
      borderColor: 'black',
      borderWidth: 2,
      width: '100%',
      height: '5%',
  },

  topSide: {
      alignItems: 'center',
      borderBottomColor: 'black',
      borderBottomWidth: 2,
      justifyContent: 'flex-end',
      height: '10%',
      width: '80%',
  },

  topText: {
      fontSize: 30,
  },

  number: {
    fontSize: 24,
  },

  squareContainer: {
    borderColor:'black',
    borderWidth:2,
    flexDirection: 'row',
    height: '80%',
    width: '80%',
    flexWrap: 'wrap',
    position: 'absolute',
    left: '20%',
    bottom:'5%',
  }
})
export default PoolView
