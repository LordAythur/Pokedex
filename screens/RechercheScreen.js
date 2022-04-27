import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, FlatList, TextInput } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { getPokemon } from '../Api/PokeApi';
import CustomItemSearch from '../Components/ItemSearch';


export default function RechercheScreen(props) {

  const {navigation, ...restProps} = props

  const [textParent, setTextParent] = useState();
  const [listPokemon, setListPokemon] = useState("");
  const [nextPage, setNextPage] = useState("https://pokeapi.co/api/v2/pokemon/"+text);
  const [text, setText] = useState('');
  const [pokemonNameSearch, setPokemonNameSearch] = useState('');
  var urlNext = "https://pokeapi.co/api/v2/pokemon/";

  useEffect(() => {
  }, [])

  const loadPokemon = (url) => {
    getPokemon(url).then(datas => {
      setListPokemon([datas])
      console.log(urlNext)
    })
  }

  const renderItem = ({ item }) => (
    <CustomItemSearch url={urlNext+text} image={item.sprites.other.home.front_default} id={item.id} name={item.name} navigation={navigation}></CustomItemSearch>
  );

  return(
    <>
    <View style={styles.container}>
    </View>
    <TextInput
        style={styles.textInput}
        placeholder="Recherchez un Pokémon"
        onChangeText={
          newText => setText(newText.toLowerCase())
          
        }
        onSubmitEditing={() => loadPokemon("https://pokeapi.co/api/v2/pokemon/"+text)}
        defaultValue={''}
      />
      {/* <Text style={{padding: 10, fontSize: 42}}>
        {text}
      </Text> */}
    <FlatList 
      style={styles.list}
      numColumns={2}
      data={listPokemon} 
      renderItem={renderItem} 
      keyExtractor={item => item.name}
      onEndReachedThreshold={0.5}
    />
    </>
  )
  
};

const styles = StyleSheet.create({
container: {
  justifyContent: 'center',
  alignItems: 'center',
},
list: {
  marginLeft: 10,
  flex: 1,
  alignSelf: 'stretch',
  textAlign: 'center',
},
textInput:{
  borderRadius:10,
  backgroundColor:'white',
  margin:10,
  padding:5,
  paddingLeft:10,
  paddingRight:10
}
});