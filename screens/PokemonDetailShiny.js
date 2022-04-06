import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, Text, Image } from 'react-native';
import { getPokemon } from '../Api/PokeApi';
import CustomItemShiny from '../Components/Item';


export default function PokemonDetail(props) {

  const {navigation, route, ...restProps} = props
  const { pokeID, pokeImage } = route.params;

  // const PokeImage = { uri: 'https://professorlotus.com/Sprites/'+pokeID+'.gif' };

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
    <CustomItemShiny url={item.url} name={pokeID} navigation={navigation}></CustomItemShiny>
  );

  return(
    <>
    <Image
      style={styles.imgPokemon}
      source={{uri: pokeImage}}
    />
    <View style={styles.container}>
      <Text>{pokeID}</Text>
    </View>
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
imgPokemon: {
  height: 100,
  width: 100,
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