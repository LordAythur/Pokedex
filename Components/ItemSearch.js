import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import TilePokemonSearch from './TilePokemonSearch';

export default function CustomItem(props) {

    const {image, name, url, navigation, ...restProps} = props

    //console.log(text, color)

    return (
        <View style={styles.item}>
            <TilePokemonSearch uri={url} navigation={navigation}></TilePokemonSearch>
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