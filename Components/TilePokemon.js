import { React, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Vibration} from 'react-native';
import { getPokemonInfo, getPokemonSpecies } from '../Api/PokeApi';


export default function Sprite(props) {

const {uri, navigation, ...restProps} = props 

const [pokemonDatas, setPokemonDatas] = useState(null)
const [pokemonSprite, setPokemonSprite] = useState(null)

useEffect(() => {
    getPokemonInfo(uri).then(data => {
        setPokemonSprite(data.sprites.other.home.front_default)
        setPokemonDatas(data)
    })
}, [])



function onPress(){
    Vibration.vibrate(10 * 0.5);
    //getPokemonInfo(uri).then(data => {
        navigation.navigate('PokemonDetail',{
            uri:uri,
        });
}

return (
    <TouchableOpacity onPress={() => onPress()}>
        <Image
            style={styles.imgPokemon}
            source={{uri: pokemonSprite}}
        />
    </TouchableOpacity>
)       
}

const styles = StyleSheet.create({
    imgPokemon: {
        height: 75,
        width: 75
    },
});