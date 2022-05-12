import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import TilePokemon from './TilePokemonShiny';
import { getPokemon } from '../Api/PokeApi';

export default function CustomItem(props) {

    const {name, url, navigation, ...restProps} = props
    const [pokemonNameVf, setPokemonNameVf] = useState("");

    useEffect(() => {
        loadPokemon(url)
      }, [])
    
      const loadPokemon = (url) => {
        getPokemon(url).then(datas => {
            getPokemon(datas.species.url).then(data => {
                const name = data.names.find(name => name.language.name === "fr");
                setPokemonNameVf(name.name);
            })
        })
      }

    return (
        <View style={styles.item}>
            <TilePokemon uri={url} navigation={navigation}></TilePokemon>
            <Text style={styles.title}>{name}</Text>
        </View>
    )       
}

const styles = StyleSheet.create({
    title: {
        fontSize: 15,
        textTransform: 'capitalize',
        color: '#FFD700',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 1
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