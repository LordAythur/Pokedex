import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';
import { getPokemon } from '../Api/PokeApi';
import CustomItem from '../Components/Item';


export default function HomeScreen(props) {

  const {navigation, ...restProps} = props
  const [isEnabledTop, setIsEnabledTop] = useState(false);
  const [isEnabledBottom, setIsEnabledBottom] = useState(false);
  const toggleSwitchTop = () => setIsEnabledTop(previousStateTop => !previousStateTop);
  const toggleSwitchBottom = () => setIsEnabledBottom(previousStateBottom => !previousStateBottom);
 
  return(
    <>
    <View style={styles.container}>
      <Text style={styles.title}>Donner l'accès aux fichiers</Text>
    </View>
    <View style={styles.containerFlex}>
      <Text style={styles.choiceNo}>Non</Text>
      <Switch
        trackColor={{ false: "#767577", true: "red" }}
        thumbColor={isEnabledTop ? "lightcoral" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitchTop}
        value={isEnabledTop}
        style={styles.switch}
      />
      <Text style={styles.choiceYes}>Oui</Text>
    </View>
    <View style={styles.container}>
      <Text style={styles.title}>Activer la rotation d'écran</Text>
    </View>
    <View style={styles.containerFlex}>
      <Text style={styles.choiceNo}>Non</Text>
      <Switch
        trackColor={{ false: "#767577", true: "red" }}
        thumbColor={isEnabledBottom ? "lightcoral" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitchBottom}
        value={isEnabledBottom}
        style={styles.switch}
      />
      <Text style={styles.choiceYes}>Oui</Text>
    </View>
    </>
  )
  
};

const styles = StyleSheet.create({
container: {
  justifyContent: 'center',
  alignItems: 'center',
  marginTop:20,
},
containerFlex: {
  justifyContent: 'center',
  alignItems: 'center',
  marginTop:20,
  display:'flex',
  flexDirection:'row'
},
list: {
  marginLeft: 10,
  flex: 1,
  alignSelf: 'stretch',
  textAlign: 'center',
},

title: {
  fontWeight:'bold',
  fontSize:20,
},
choiceNo: {
  fontWeight:'bold',
  fontSize:15,
  color:'#767577'
},
choiceYes: {
  fontWeight:'bold',
  fontSize:15,
  color:'red'
},

siwtch: {
width:20,
}
});