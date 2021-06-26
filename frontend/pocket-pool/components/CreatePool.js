import React, { useState, useCallback, useEffect } from 'react'
import {Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'

const CreatePool = ()=> {

  const [leagueOpen, setLeagueOpen]=useState(false)
  const [gameOpen, setGameOpen]=useState(false)
  const [leagueValue, setLeagueValue]=useState(null)
  const [gameValue, setGameValue]=useState(null)
  const [leagueItems, setLeagueItems]=useState([
    {label: 'NFL', value: 'NFL'},
    {label: 'NBA', value: 'NBA'}
  ])
  const [nbaItems, setNbaItems]=useState([

  ])
  const [nflItems, setNflItems]=useState([

  ])
/*
  useEffect(()=> {
    fetch("https://api-nba-v1.p.rapidapi.com/games/seasonYear/2020", {
  	"method": "GET",
  	"headers": {
  		"x-rapidapi-key": "ab1b6aa2e6msh9c8a2eb2b20d521p13cd74jsn0900b994b1c8",
  		"x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
  	}
  })
  .then(res=> res.json())
  .then(res => {
    let items= []
    res.api.games.filter(game => {
      if (game.currentPeriod !=="0/4") {
        return
      }
      else {
        let gameObj= {
          label: `${game.vTeam.fullName} @ ${game.hTeam.fullName}`,
          value: game.gameId,
        }

        items.push(gameObj)
      }
    })
    console.log('heres our items',items)
    setNbaItems(items)
  })
  .catch(err => {
  console.error(err);
  });
},[])
*/

  const onLeagueOpen = useCallback(()=> {
    setGameOpen(false)
  }, [])

  const onGameOpen = useCallback(()=> {
    setLeagueOpen(false)
  }, [])

  const sendPoolData = ()=> {
    console.log(nbaItems, nflItems)
    if (nbaItems.length == 0 && nflItems.length == 0) {
      Alert.alert(
        'Alert',
        'Please Select a Game'
      )
    }
    /*
    gameId
    fetch()
    */
  }
  return (
    <View style={styles.container}>
      <View style={styles.leagueView}>
        <Text> Select League </Text>
        <DropDownPicker
          open={leagueOpen}
          onOpen={onLeagueOpen}
          value={leagueValue}
          items={leagueItems}
          setOpen={setLeagueOpen}
          setValue={setLeagueValue}
          setItems={setLeagueItems}
        />
      </View>
        {
        leagueValue == 'NBA' ? (
        <View style={styles.gameView}>
          <Text> Select Game </Text>
          <DropDownPicker
            open={gameOpen}
            onOpen={onGameOpen}
            value={gameValue}
            items={nbaItems}
            setOpen={setGameOpen}
            setValue={setGameValue}
            setItems={setNbaItems}
          />
        </View> ): null}
      <View style={styles.createBtn}>
        <TouchableOpacity
          onPress={sendPoolData}
          style={{flex:1}}>
          <Text style={{fontSize: 36}}>
            Create
          </Text>
        </TouchableOpacity>
      </View>
    </View>
   )
}

const styles=StyleSheet.create({
    createBtn: {
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: 'rgb(73, 184, 174)',
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: 5,
      width: '30%',
      height: '8%',
    },

    container: {
      flex: 1,
      justifyContent: 'flex-start',
      marginTop: '15%',
    },

    leagueView: {
      height: '25%',
    },

    gameView: {
      height: '25%',
    },

})

export default CreatePool
