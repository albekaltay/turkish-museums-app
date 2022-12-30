import { StyleSheet,ImageBackground,SafeAreaView, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartedScreen from './screens/StartedScreen';


const Stack = createNativeStackNavigator();

export default function App() {



  return (
    <NavigationContainer> 
    <ImageBackground
        style={styles.rootScreen}
        imageStyle={styles.imageStyle}
        resizeMode={"cover"}
        source={require("./assets/istanbul-archeology-museum.jpg")}
      >

  <SafeAreaView style={styles.rootScreen}> 
      <Stack.Navigator>
        <Stack.Screen name="Started Screen" component={StartedScreen} />
      </Stack.Navigator>
        </SafeAreaView>
      </ImageBackground>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    justifyContent:'flex-start',

  },

  imageStyle: {
    opacity: 0.9
  },
});
