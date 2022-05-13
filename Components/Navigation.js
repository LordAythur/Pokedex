import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import HomeScreen from '../screens/HomeScreen';
import HomeScreenShiny from '../screens/HomeScreenShiny';
import RechercheScreen from '../screens/RechercheScreen';
import EquipeScreen from '../screens/EquipeScreen';
import ParametreScreen from '../screens/ParametreScreen';
import PokemonDetail from '../screens/PokemonDetail';
import PokemonDetailShiny from '../screens/PokemonDetailShiny';
import PokemonDetailSearch from '../screens/PokemonDetailSearch';
import PokemonDetailEquipe from '../screens/PokemonDetailEquipe';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Vibration} from 'react-native';

import { Ionicons } from '@expo/vector-icons'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function PokemonStack() {
    return(
      <Stack.Navigator>
        <Stack.Screen name="Tout les Pokémon" component={HomeScreen} ></Stack.Screen>
        <Stack.Screen name="PokemonDetail" component={PokemonDetail}></Stack.Screen>
      </Stack.Navigator>
    )
};

function PokemonShinyStack() {
    return(
      <Stack.Navigator>
        <Stack.Screen name="Tout les Pokémon chromatiques" component={HomeScreenShiny} onPress={() => Vibration.vibrate(10 * 0.5)}></Stack.Screen>
        <Stack.Screen name="PokemonDetailShiny" component={PokemonDetailShiny}></Stack.Screen>
      </Stack.Navigator>
    )
};

function RechercheStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Recherchez une Pokémon" component={RechercheScreen} ></Stack.Screen>
      <Stack.Screen name="PokemonDetailSearch" component={PokemonDetailSearch}></Stack.Screen>
    </Stack.Navigator>
  )
};

function EquipeStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Votre équipe" component={EquipeScreen} ></Stack.Screen>
      <Stack.Screen name="PokemonDetailEquipe" component={PokemonDetailEquipe}></Stack.Screen>
    </Stack.Navigator>
  )
};

function ParametreStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Ajustez les options" component={ParametreScreen} ></Stack.Screen>
    </Stack.Navigator>
  )
};

export default function Navigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'red',
              }}>
                <Tab.Screen
                    options={{title: "POKéDEX", headerTintColor: "white", headerStyle: {backgroundColor: "red"},
                    tabBarIcon: (tabInfo) => {
                      return (
                        <Ionicons
                          name="md-home"
                          size={24}
                          color={tabInfo.focused ? "red" : "#707070"}
                        />
                      );
                    }, }}
                    name="POKéDEX"
                    component={PokemonStack}
                    />
                <Tab.Screen
                    options={{title: "POKéDEX SHINY", headerTintColor: "white", headerStyle: {backgroundColor: "red"},
                    tabBarIcon: (tabInfo) => {
                      return (
                        <Ionicons
                          name="md-home"
                          size={24}
                          color={tabInfo.focused ? "red" : "#707070"}
                        />
                      );
                    }, }}
                    name="POKéDEX SHINY"
                    component={PokemonShinyStack}
                />
                 <Tab.Screen
                    options={{title: "RECHERCHE", headerTintColor: "white", headerStyle: {backgroundColor: "red"},
                    tabBarIcon: (tabInfo) => {
                      return (
                        <Ionicons
                          name="md-search"
                          size={24}
                          color={tabInfo.focused ? "red" : "#707070"}
                        />
                      );
                    }, }}
                    name="RECHERCHE"
                    component={RechercheStack}
                />
                <Tab.Screen
                    options={{title: "EQUIPE", headerTintColor: "white", headerStyle: {backgroundColor: "red"},
                    tabBarIcon: (tabInfo) => {
                      return (
                        <Ionicons
                          name="md-bookmark-outline"
                          size={24}
                          color={tabInfo.focused ? "red" : "#707070"}
                        />
                      );
                    }, }}
                    name="EQUIPE"
                    component={EquipeStack}
                />
                <Tab.Screen
                    options={{title: "PARAMETRES", headerTintColor: "white", headerStyle: {backgroundColor: "red"},
                    tabBarIcon: (tabInfo) => {
                      return (
                        <Ionicons
                          name="md-settings-outline"
                          size={24}
                          color={tabInfo.focused ? "red" : "#707070"}
                        />
                      );
                    }, }}
                    name="PARAMETRES"
                    component={ParametreStack}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}