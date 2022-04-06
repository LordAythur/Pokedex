import { React, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Vibration} from 'react-native';
import { getPokemonInfo } from '../Api/PokeApi';


export default function Sprite(props) {

const {uri, navigation, ...restProps} = props 

const [pokemonSprite, setPokemonSprite] = useState(null)

getPokemonInfo(uri).then(data => {
    console.log(data.sprites.front_default)
    setPokemonSprite(data.sprites.other.home.front_default)
})

function onPress(){
    Vibration.vibrate(10 * 0.5);
    getPokemonInfo(uri).then(data => {navigation.navigate('PokemonDetail',{
        pokeID: data.name,
        pokeImage: data.sprites.other.home.front_default,
      })
    })
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