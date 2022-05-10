import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { getPokemon } from '../Api/PokeApi';
import CustomItem from '../Components/Item';


export default function HomeScreen(props) {

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
    <CustomItem url={item.url} name={item.name} navigation={navigation}></CustomItem>
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
list: {
  marginLeft: 10,
  flex: 1,
  alignSelf: 'stretch',
  textAlign: 'center',
},
});