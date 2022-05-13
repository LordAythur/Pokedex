import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TilePokemonEquipe from './TilePokemonEquipe';

export default function CustomItem(props) {

    const {name, navigation} = props

    return (
        <View style={styles.item}>
            <TilePokemonEquipe uri={'https://pokeapi.co/api/v2/pokemon/'+name} navigation={navigation}></TilePokemonEquipe>
            <Text style={styles.title}>{name}</Text>
            {/* pokemonNameVf pour vf sur les noms de pokémon */}
        </View>
    )       
}

const styles = StyleSheet.create({
    title: {
        fontSize: 15,
        textTransform: 'capitalize',
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