import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import NaviagateCard from "../components/NaviagateCard";
import RideOptionCard from "../components/RideOptionCard";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import type { Navigation } from "../components/NavOptions";

const MapScreen = () => {
  const Stack = createStackNavigator();
  const navigation: Navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeScreen")}
        style={tw`absolute top-12 left-6 z-50 bg-white p-3 rounded-full shadow-lg`}
      >
        <Icon name="menu" />
      </TouchableOpacity>

      <View style={tw`h-1/2`}>
        <Map />
      </View>

      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NaviagateCard"
            component={NaviagateCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RideOptionCard"
            component={RideOptionCard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
