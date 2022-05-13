import { React, useState, useEffect } from 'react';
import { StyleSheet, Image, TouchableOpacity, Vibration} from 'react-native';
import { getPokemonInfo } from '../Api/PokeApi';


export default function Sprite(props) {

const {uri, shiny, navigation} = props 

const [pokemonDatas, setPokemonDatas] = useState(null)
const [pokemonSprite, setPokemonSprite] = useState(null)
const [pokemonSpriteShiny, setPokemonSpriteShiny] = useState(null)
const [isPokemonShiny, setIsPokemonShiny] = useState(null)

useEffect(() => {
    getPokemonInfo(uri).then(data => {
        setPokemonSprite(data.sprites.other.home.front_default)
        setPokemonSpriteShiny(data.sprites.other.home.front_shiny)
        setPokemonDatas(data)
        setIsPokemonShiny(shiny)
    })
}, [])



function onPress(){
    Vibration.vibrate(10 * 0.5);
    navigation.navigate('PokemonDetailEquipe',{
        uri:uri,
    });
}

return (
    <TouchableOpacity onPress={() => onPress()}>
        

        {isPokemonShiny == 0 ? (
                <Image
                    style={styles.imgPokemon}
                    source={{uri: pokemonSprite}}
                />
            ) : (
                <Image
                    style={styles.imgPokemon}
                    source={{uri: pokemonSpriteShiny}}
                />
            )
            }
    </TouchableOpacity>
)       
}

const styles = StyleSheet.create({
    imgPokemon: {
        height: 75,
        width: 75
    },
});