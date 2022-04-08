import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { TabRouter } from "react-navigation"
import HomeScreen from '../screens/HomeScreen';
import HomeScreenShiny from '../screens/HomeScreenShiny';
import RechercheScreen from '../screens/RechercheScreen';
import PokemonDetail from '../screens/PokemonDetail';
import PokemonDetailShiny from '../screens/PokemonDetailShiny';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Vibration} from 'react-native';
import { getPokemon } from '../Api/PokeApi';

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
      <Stack.Screen name="Recherche" component={RechercheScreen} ></Stack.Screen>
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
                    options={{title: "POKéDEX", headerTintColor: "white", headerStyle: {backgroundColor: "red"} }}
                    name="POKéDEX"
                    component={PokemonStack}
                    />
                <Tab.Screen
                    options={{title: "POKéDEX SHINY", headerTintColor: "white", headerStyle: {backgroundColor: "red"} }}
                    name="POKéDEX SHINY"
                    component={PokemonShinyStack}
                />
                 <Tab.Screen
                    options={{title: "POKéDEX", headerTintColor: "white", headerStyle: {backgroundColor: "red"} }}
                    name="RECHERCHE"
                    component={RechercheStack}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}