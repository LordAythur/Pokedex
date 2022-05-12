import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import TilePokemon from './TilePokemon';

export default function CustomItem(props) {

    const {name, url, navigation, ...restProps} = props

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