import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { getPokemon } from '../Api/PokeApi';
import CustomItemShiny from '../Components/ItemShiny';


export default function Home(props) {

  const {navigation, ...restProps} = props

  const [textParent, setTextParent] = useState();
  const [listPokemon, setListPokemon] = useState("");
  const [nextPage, setNextPage] = useState("https://pokeapi.co/api/v2/pokemon");

  useEffect(() => {
    loadPokemon(nextPage)
  }, [])

  const loadPokemon = (url) => {
    getPokemon(url).then(datas => {
      setListPokemon([...listPokemon, ...datas.results])
      setNextPage(datas.next)
    })
  }

  const renderItem = ({ item }) => (
    <CustomItemShiny url={item.url} name={item.name} navigation={navigation}></CustomItemShiny>
  );

  return(
    <>
    <View style={styles.container}>
    </View>
    <FlatList 
      style={styles.list}
      numColumns={3}
      data={listPokemon} 
      renderItem={renderItem} 
      keyExtractor={item => item.name}
      onEndReachedThreshold={0.5}
      onEndReached={() => {
        loadPokemon(nextPage)
      }} 
    />
    </>
  )
  
};

const styles = StyleSheet.create({
container: {
  justifyContent: 'center',
  alignItems: 'center',
},
containerButton: {
  flex: 1,
  justifyContent: 'space-around',
  textAlign: 'center',
  alignItems: 'center',
  flexDirection: 'row',
},
image: {
  flex: 1,
},
imagePokemon: {
  height: 64,
  width: 64,
},
text: {
  color: 'white',
  fontSize: 42,
  lineHeight: 84,
  fontWeight: 'bold',
},
baseText: {
  fontSize: 50,
  margin: 20,
},
title: {
  fontSize: 15,
  textTransform: 'capitalize',
},
list: {
  marginLeft: 10,
  flex: 1,
  alignSelf: 'stretch',
  textAlign: 'center',
},
item: {
  margin: 15,
  minWidth: 85,
  width: 'auto',
  textAlign: 'center',
  flex: 1,
  alignItems: 'center',
},
});