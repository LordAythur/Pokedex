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
  const [pokemonCapa0, setPokemonCapa0] = useState("");
  const [pokemonCapa1, setPokemonCapa1] = useState("");
  const [pokemonCapa2, setPokemonCapa2] = useState("");

  useEffect(() => {
    loadPokemon(uri)
    //console.log('test')
  }, [])

  const pokemonType = (type, style) => {
    switch(type) {
      case 'Plante':
        return style.typePlante;
      break;
      case 'Eau':
        return style.typeEau;
      break;
      case 'Feu':
        return style.typeFeu;
      break;
      case 'Insecte':
        return style.typeInsect;
      break;
      case 'Normal':
        return style.typeNormal;
      break;
      case 'Poison':
        return style.typePoison;
      break;
      case 'Vol':
        return style.typeVol;
      break;
      case 'Acier':
        return style.typeAcier;
      break;
      case 'Ténèbres':
        return style.typeTenebre;
      break;
      case 'Glace':
        return style.typeGlace;
      break;
      case 'Dragon':
        return style.typeDragon;
      break;
      case 'Combat':
        return style.typeCombat;
      break;
      case 'Psy':
        return style.typePsy;
      break;
      case 'Fée':
        return style.typeFee;
      break;
      case 'Sol':
        return style.typeSol;
      break;
      case 'Roche':
        return style.typeRoche;
      break;
      case 'Spectre':
        return style.typeSpectre;
      break;
      case 'Électrik':
        return style.typeElectrique;
      break;
    }
  }

  const loadPokemon = (url) => {
    getPokemon(url).then(datas => {
      setPokemonDatas(datas)
      const type = datas.types;
      const capa = datas.abilities;
      var count = 0;
      var typePrecedent = "";
      var capaPrecedente = "";

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

      count = 0;

      // capa.forEach(capa => {

      //   getPokemon(capa.ability.url).then(data => {
      //     data.names.forEach(data => {
      //       if(data.language.name === 'fr'){
      //         if( count < 2 && capaPrecedente != data.name){
      //           if(count === 0) {
      //             setPokemonCapa0(data.name);
      //           } else if(count === 1) {
      //             setPokemonCapa1(data.name);
      //           } 
      //           else { 
      //             setPokemonCapa2(data.name);
      //           }
      //           count++;
      //           capaPrecedente = data.name;
      //           console.log(capaPrecedente);
      //         }
      //       }
      //     });
      //   })
      // });

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
    
    <View style={styles.container}>
      <Image
        style={styles.imgPokemon}
        source={{uri: pokemonDatas ? pokemonDatas.sprites.other.home.front_shiny : null}}
      />
      {
        pokemonDatas ?
        <>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>{pokemonNameVf} </Text>
            <Text style={styles.titleGrey}>N°{pokemonDatas.id}</Text>
          </View>
          <View style={styles.containerType}>
            <Text style={[pokemonType(pokemonType0,styles), styles.type]}>{pokemonType0}</Text>
            <Text style={[pokemonType(pokemonType1,styles), styles.type]}>{pokemonType1}</Text>
          </View>
          <Text style={styles.desc}>{pokemonDesc}</Text>
          <View style={styles.containerCapa}>
            <Text style={styles.capa}>{pokemonCapa0}</Text>
            <Text style={styles.capa}>{pokemonCapa1}</Text>
            <Text style={styles.capa}>{pokemonCapa2}</Text>
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
  height: 200,
  width: 200,
},

desc: {
  backgroundColor:'#ffffff',
  padding:20,
  borderRadius:10,
},

containerTitle: {
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'nowrap',
  flexDirection: 'row'
},
title: {
  fontWeight:'bold',
  fontSize:40,
},
titleGrey: {
  color:'#616161',
},

containerCapa: {
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'nowrap',
  flexDirection: 'row'
},
capa: {
  margin: 10,
  backgroundColor:'#ffffff',
  padding: 10,
  borderRadius: 10,
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
typePlante: {     backgroundColor: '#78C850',color:'white'},
typeFeu: {        backgroundColor: '#F08030',color:'white'},
typeEau: {        backgroundColor: '#6890F0',color:'white'},
typeInsect: {     backgroundColor: '#A8B820',color:'white'},
typeNormal: {     backgroundColor: '#A8A878',color:'white'},
typePoison: {     backgroundColor: '#A040A0',color:'white'},
typeElectrique: { backgroundColor: '#F8D030',color:'white'},
typeSol: {        backgroundColor: '#E0C068',color:'white'},
typeFee: {        backgroundColor: '#EE99AC',color:'white'},
typeCombat: {     backgroundColor: '#C03028',color:'white'},
typePsy: {        backgroundColor: '#F85888',color:'white'},
typeRoche: {      backgroundColor: '#B8A038',color:'white'},
typeSpectre: {    backgroundColor: '#705898',color:'white'},
typeGlace: {      backgroundColor: '#98D8D8',color:'white'},
typeDragon: {     backgroundColor: '#7038F8',color:'white'},
typeAcier: {      backgroundColor: '#F8F9FA',color:'#616161'},
typeTenebre: {    backgroundColor: '#705848',color:'white'},
typeVol: {        backgroundColor: '#A890F0',color:'white'},
});