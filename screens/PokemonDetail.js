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
  const [pokemonType0, setPokemonType0] = useState("");
  const [pokemonType1, setPokemonType1] = useState("");

  useEffect(() => {
    loadPokemon(uri)
    //console.log('test')
  }, [])

  const loadPokemon = (url) => {
    getPokemon(url).then(datas => {
      setPokemonDatas(datas)
      const type = datas.types;
      var count = 0;
      var typePrecedent = "";

      type.forEach(type => {

        getPokemon(type.type.url).then(data => {
          data.names.forEach(data => {
            if(data.language.name === 'fr'){
              if( count < 2 && typePrecedent != data.name){
                if(count === 0) {
                  setPokemonType0(data.name);
                } else {
                  setPokemonType1(data.name);
                }
                count++;
                typePrecedent = data.name;
                console.log(typePrecedent);
              }
            }
          });
        })
      });

      getPokemon(datas.species.url).then(data => {
        //console.log(data);
        const name = data.names.find(name => name.language.name === "fr");
        const desc = data.flavor_text_entries.find(desc => desc.language.name === "fr") ;
        setPokemonNameVf(name.name);
        setPokemonDesc(desc.flavor_text);
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
      source={{uri: pokemonDatas ? pokemonDatas.sprites.other["official-artwork"].front_default : null}}
    />
    <View style={styles.container}>
      {
        pokemonDatas ?
        <>
          <Text>{pokemonDatas.id} - {pokemonNameVf}</Text>
          <Text>{pokemonDesc}</Text>
          <View style={styles.containerType}>
            <Text style={[styles.typePoison, styles.type]}>{pokemonType0}</Text>
            <Text style={[styles.typePlante, styles.type]}>{pokemonType1}</Text>
          </View>
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
imgPokemon: {
  height: 100,
  width: 100,
},


containerType: {
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'nowrap',
  flexDirection: 'row'
},
type: {
  width: 100,
  height: 40,
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 10,
  padding: 10,
  margin: 10
},
typePlante: {backgroundColor: '#78C850'},
typeFeu: {backgroundColor: '#F08030'},
typeEau: {backgroundColor: '#6890F0'},
typeInsect: {backgroundColor: '#A8B820'},
typeNormal: {backgroundColor: '#A8A878'},
typePoison: {backgroundColor: '#A040A0'},
typeElectrique: {backgroundColor: '#F8D030'},
typeSol: {backgroundColor: '#E0C068'},
typeFee: {backgroundColor: '#EE99AC'},
typeCombat: {backgroundColor: '#C03028'},
typePsy: {backgroundColor: '#F85888'},
typeRoche: {backgroundColor: '#B8A038'},
typeSpectre: {backgroundColor: '#705898'},
typeGlace: {backgroundColor: '#98D8D8'},
typeDragon: {backgroundColor: '#7038F8'},
typeAcier: {backgroundColor: '#F8F9FA'},
typeTenebre: {backgroundColor: '#705848'},
typeVol: {backgroundColor: '#A890F0'},
});