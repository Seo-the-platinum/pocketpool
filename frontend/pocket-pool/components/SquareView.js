import React from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View} from 'react-native'

const SquareVIew=({route})=> {
  return(
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      <View style={styles.square}>
        <Text>{`No.${route.params.number}`}</Text>
        <TextInput
          placeholder="Enter Name Here"
          style={styles.input}/>
      </View>
      <View style={styles.buttonArea}>
        <TouchableOpacity style={styles.purchaseSquare}>
          <Text style={styles.purchaseText}>
            Purchase Square
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles=StyleSheet.create({
  buttonArea: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-around',
  },

  input: {
      borderBottomColor: 'black',
      borderBottomWidth: 2,
      width: '80%',
  },

  purchaseSquare: {
    width: '50%',
    borderRadius: 8,
    borderWidth: 2,
  },

  purchaseText:{
    fontSize: 24,
  },

  square: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: 'powderblue',
    justifyContent: 'space-around',
    width: '75%',
    height: '50%',
  }
})
export default SquareVIew
