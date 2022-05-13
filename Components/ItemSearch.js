import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TilePokemonSearch from './TilePokemonSearch';

export default function CustomItem(props) {

    const {id, name, url, navigation} = props

    return (
        <View style={styles.item}>
            <TilePokemonSearch uri={url} navigation={navigation}></TilePokemonSearch>
            <Text style={styles.title}>N°{id} - {name}</Text>
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