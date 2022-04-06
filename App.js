import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, ImageBackground } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import Navigation from './Components/Navigation';

const Stack = createNativeStackNavigator();

const Image = { uri : "https://static.wikia.nocookie.net/pokemongo/images/d/d1/Pokedex_Background.png" };

export default function App() {

return (    
//<ImageBackground source={Image} resizeMode="cover" style={styles.image}>
  // <View style={styles.container}>

  //   <NavigationContainer style={styles.general}>
  //     <Stack.Navigator>
  //       <Stack.Screen name="POKéDEX" component={HomeScreen} />
  //     </Stack.Navigator>
  //   </NavigationContainer> 
  // </View>
  //</ImageBackground>
  <Navigation></Navigation>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  general: {
  },
  image: {
  },
});