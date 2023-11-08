import { Image, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import SearchOrigin from "../components/SearchOrigin";
import NavFaviorite from "../components/NavFaviorite";

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
