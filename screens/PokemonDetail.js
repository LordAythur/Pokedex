import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, Text, Image } from 'react-native';
import { getPokemon, getPokemonSpecies } from '../Api/PokeApi';
import CustomItem from '../Components/Item';


export default function PokemonDetail(props) {

  const {navigation, route, ...restProps} = props
  const { uri } = route.params;

  const [pokemonDatas, setPokemonDatas] = useState(null);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonNameVf, setPokemonNameVf] = useState("");
  const [pokemonDesc, setPokemonDesc] = useState("");
  const [PokemonType, setPokemonType] = useState("");

  useEffect(() => {
    loadPokemon(uri)
    console.log('test')
  }, [])

  const loadPokemon = (url) => {
    getPokemon(url).then(datas => {
      setPokemonDatas(datas)
      getPokemon(datas.species.url).then(data => {
        console.log(data);
        const name = data.names.find(name => name.language.name === "fr");
        const desc = data.flavor_text_entries.find(desc => desc.language.name === "fr") ;
        setPokemonNameVf(name.name);
        setPokemonDesc(desc.flavor_text);
      })
      getPokemon(datas.types.type.url).then(data => {
        console.log(data);
        const type = data.names.find(name => name.language.name === "fr");
        setPokemonType(type.name);
      })
    })
  }

  const renderItem = ({ item }) => (
    <CustomItem url={item.url} name={pokeID} navigation={navigation}></CustomItem>
  );

  return(
    <>
    <Image
      style={styles.imgPokemon}
      source={{uri: pokemonDatas ? pokemonDatas.sprites.other.home.front_default : null}}
    />
    <View style={styles.container}>
      {
        pokemonDatas ?
        <>
          <Text>{pokemonDatas.id} - {pokemonNameVf}</Text>
          <Text>{pokemonDesc}</Text>
          <Text>{pokemonDatas.types.type}</Text>
        </> :
        null
      }
      
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