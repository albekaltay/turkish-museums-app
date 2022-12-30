import { StyleSheet } from "react-native";
import StartedScreen from "./screens/StartedScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Museums from "./screens/Museums";
import DetailScreen from "./screens/DetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Started Screen" component={StartedScreen} />
        <Stack.Screen name="Museums" component={Museums} />
        <Stack.Screen name="Detail Screen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
