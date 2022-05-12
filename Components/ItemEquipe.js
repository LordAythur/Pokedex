import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import TilePokemonEquipe from './TilePokemonEquipe';

export default function CustomItem(props) {

    const {name, url, navigation, ...restProps} = props

    console.log(url)

    return (
        <View style={styles.item}>
            <TilePokemonEquipe uri={'https://pokeapi.co/api/v2/pokemon/'+name} navigation={navigation}></TilePokemonEquipe>
            <Text style={styles.title}>{name}</Text>
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