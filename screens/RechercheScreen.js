import React, { useState } from 'react';
import { Text, StyleSheet, View, FlatList, TextInput } from 'react-native';
import { getPokemon } from '../Api/PokeApi';
import CustomItemSearch from '../Components/ItemSearch';


export default function RechercheScreen(props) {

  const {navigation} = props

  const [listPokemon, setListPokemon] = useState("");
  const [text, setText] = useState('');
  var urlNext = "https://pokeapi.co/api/v2/pokemon/";

  const loadPokemon = (url) => {
    getPokemon(url).then(datas => {
      setListPokemon([datas])
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
      {(listPokemon === undefined) ?
        <Text style={styles.center}>Pas de Pokémon trouvé !</Text> :
        (listPokemon) ?
          <FlatList 
            style={styles.list}
            numColumns={2}
            data={listPokemon} 
            renderItem={renderItem} 
            keyExtractor={item => item.name}
            onEndReachedThreshold={0.5}
          /> :
          <Text style={styles.center}>Utilisez la barre de recherche pour trouver un Pokémon</Text>
      }
    </>
  )
  
};

const styles = StyleSheet.create({
container: {
  justifyContent: 'center',
  alignItems: 'center',
},
center: {
  marginLeft: 10,
  flex: 1,
  alignSelf: 'stretch',
  textAlign: 'center',
  borderRadius:10,
  backgroundColor:'white',
  margin:10,
  padding:5,
},
list: {
  marginLeft: 10,
  flex: 1,
  alignSelf: 'stretch',
  textAlign: 'center',
  borderRadius:10,
  backgroundColor:'white',
  margin:10,
  padding:5,
},
textInput:{
  borderRadius:10,
  backgroundColor:'white',
  margin:10,
  padding:5,
  paddingLeft:10,
  paddingRight:10
},
text:{
  borderRadius:10,
  margin:10,
  padding:5,
  paddingLeft:10,
  paddingRight:10
}
});