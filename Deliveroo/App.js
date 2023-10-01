import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { registerRootComponent } from "expo";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import BasketScreen from "./screens/BasketScreen";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";
import DeliveryScreen from "./screens/DeliveryScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen
            name="Basket"
            component={BasketScreen}
            options={{
              presentation: "modal",
              animation: "fade_from_bottom",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Preparingorder"
            component={PreparingOrderScreen}
            options={{
              presentation: "fullScreenModal",
              animation: "fade_from_bottom",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Delivery"
            component={DeliveryScreen}
            options={{
              headerShown: false,
              presentation: "fullScreenModal",
              animation: "slide_from_right",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

registerRootComponent(App);
