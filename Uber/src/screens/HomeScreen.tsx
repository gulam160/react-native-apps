import React from "react";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import NavFaviorite from "../components/NavFaviorite";
import NavOptions from "../components/NavOptions";
import SearchOrigin from "../components/SearchOrigin";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`p-5 bg-white h-full`}>
      <View>
        <Image
          source={require("../../assets/uberlogo.png")}
          style={{ width: 90, height: 90, resizeMode: "contain" }}
        />
      </View>
      <SearchOrigin />
      <NavOptions />
      <NavFaviorite />
    </SafeAreaView>
  );
};

export default HomeScreen;
