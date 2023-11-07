import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { registerRootComponent } from "expo";
import { useEffect, useState } from "react";
import BottomTabNavigator from "./src/components/BottomTabNavigator";
import { Authenticate, Onboarding } from "./src/screens";
import { getItems } from "./src/utils/asyncStorage";

const Stack = createNativeStackNavigator();

export default function App() {
  const [showOnboarding, setShowOnboarding] = useState(true);

  useEffect(() => {
    async function checkIfUserIsOnboarded() {
      const value = await getItems("_isOnboarded_");
      if (value === null) return;
      if (value === "YES" && value !== null) {
        setShowOnboarding(false);
      }
    }
    checkIfUserIsOnboarded();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {showOnboarding && (
          <Stack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{ headerShown: false }}
          />
        )}
        <Stack.Screen
          name="Authenticate"
          component={Authenticate}
          options={{ headerShown: false, animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="BottomNavigations"
          component={BottomTabNavigator}
          options={{ headerShown: false, animation: "slide_from_right" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);
