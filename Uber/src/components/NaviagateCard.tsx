import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import SearchDestination from "./SearchDestination";
import NavFaviorite from "./NavFaviorite";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import type { Navigation } from "./NavOptions";

const NaviagateCard = () => {
  const navigation: Navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl text-gray-600 font-semibold`}>
        Hi! Gulam Mustafa
      </Text>
      <View style={tw`border-t border-gray-300 flex-shrink`}>
        <View style={tw`m-4`}>
          <SearchDestination />
        </View>
        <NavFaviorite />
      </View>

      <View
        style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
      >
        <TouchableOpacity
          style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}
          onPress={() => navigation.navigate("RideOptionCard")}
        >
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full border border-gray-500`}
        >
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color="black"
            size={16}
          />
          <Text style={tw`text-center`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NaviagateCard;
