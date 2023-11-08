import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { registerRootComponent } from "expo";
import "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "./redux/strore";
import { Home, Eats, Map } from "./src/screens";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MapScreen"
              component={Map}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EatsScreen"
              component={Eats}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

registerRootComponent(App);
