import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, Pressable, Text } from 'react-native';
import CustomItemEquipe from '../Components/ItemEquipe';
import { retrieveData, storeData } from '../utils/localStorage';


export default function EquipeScreen(props) {

  const {navigation} = props
  const [team, setTeam] = useState([]);

  const delTeam = () => {
    let myTeam = [];

    setTeam(myTeam);

    storeData("Equipe",JSON.stringify(myTeam));
  }

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
    <View style={styles.container}>
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
      <Pressable 
        style={styles.boutonDel} 
        onPress={() => delTeam()}>
        <Text style={styles.textBouton}>Réinistialiser</Text>
      </Pressable >
    </View>
    </>
  )
  
};

const styles = StyleSheet.create({
container: {
  justifyContent:'space-between',
  alignItems: 'center',
  display:'flex',
  flexDirection:'row'
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
  width: 150,
  borderRadius: 4,
  elevation: 3,
  backgroundColor: '#00BB00',
},
boutonDel:{
  alignItems: 'center',
  justifyContent: 'center',
  padding: 10,
  margin: 10,
  width: 100,
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
  paddingRight:10,
  marginLeft: 10,
  flex: 1,
  alignSelf: 'stretch',
  textAlign: 'center',
}
});