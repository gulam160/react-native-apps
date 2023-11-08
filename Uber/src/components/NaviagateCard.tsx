import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import SearchDestination from "./SearchDestination";
import NavFaviorite from "./NavFaviorite";

const NaviagateCard = () => {
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
    </SafeAreaView>
  );
};

export default NaviagateCard;
