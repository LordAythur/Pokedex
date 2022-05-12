import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, Pressable, Text } from 'react-native';
import { getPokemon } from '../Api/PokeApi';
import CustomItemEquipe from '../Components/ItemEquipe';
import { retrieveData, storeData } from '../utils/localStorage';


export default function EquipeScreen(props) {

  const {navigation, ...restProps} = props

  const [textParent, setTextParent] = useState();
  const [listPokemon, setListPokemon] = useState("");
  const [team, setTeam] = useState([]);

  useEffect(() => {
    
    retrieveData("Equipe").then((res) => {
      if (res) {
        let datas = JSON.parse(res);
        setTeam(datas);
      }
    });

  }, []);

  const renderItem = ({ item }) => (
    <CustomItemEquipe url={item.url} name={item.name} navigation={navigation}></CustomItemEquipe>
  );
 
  return(
    <>
    <View style={styles.container}>
    </View>
    {(team.length === 0) ?
        <Text style={styles.text}>Pas de Pokémon dans votre équipe !</Text> :
          <FlatList 
            style={styles.list}
            numColumns={3}
            data={team} 
            renderItem={renderItem} 
            keyExtractor={item => item.name}
          />
      }
    <Pressable 
      style={styles.boutonAdd} 
      onPress={() => retrieveData("Equipe").then((res) => {
                        if (res) {
                          let datas = JSON.parse(res);
                          setTeam(datas);
                        }
                    })}
                    >
      <Text style={styles.textBouton}>Actualiser</Text>
    </Pressable >
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
boutonAdd:{
  alignItems: 'center',
  justifyContent: 'center',
  padding: 10,
  margin: 10,
  width: 200,
  borderRadius: 4,
  elevation: 3,
  backgroundColor: 'red',
},
textBouton:{
  color: 'white'
},
text:{
  borderRadius:10,
  margin:10,
  padding:5,
  paddingLeft:10,
  paddingRight:10
}
});