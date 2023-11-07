import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import React from "react";
import { removeItems } from "../utils/asyncStorage";
import { useNavigation } from "@react-navigation/native";
import { Navigation } from "../types/Navigation";
import * as Animatable from "react-native-animatable";
import { KindeSDK } from "@kinde-oss/react-native-sdk-0-7x";

const AuthScreen = () => {
  const navigation: Navigation = useNavigation();
  const client = new KindeSDK(
    "https://fastify.kinde.com",
    "fastify://8081.kinde.com/BottomNavigations",
    "fastify://8081.kinde.com/Authenticate",
    "f1205efd3d78415085a047dc54883e0e"
  );

  const handleSignUp = async () => {
    const token = await client.register();
    if (token) {
      console.log(token);
    }
  };

  // const handleReset = () => {
  //   removeItems("_isOnboarded_");
  //   navigation.navigate("Onboarding");
  // };

  return (
    <View className="flex-1 bg-[#f73c4f] relative">
      <StatusBar barStyle={"light-content"} />
      <View className="flex justify-center items-center h-1/2">
        <Animatable.Image
          animation="zoomIn"
          iterationCount={1}
          source={require("../../assets/icon.png")}
          className="h-52 w-52 rounded-full"
        />
      </View>
      <View className="bg-white shadow-lg rounded-t-2xl absolute left-0 right-0 bottom-0 w-full py-4">
        <View className="mx-5 mt-4 mb-8">
          <Text className="text-gray-800 text-3xl font-bold">Fastify</Text>
          <Text className="text-sm text-gray-500 mt-2">
            Your package represents our commitment to your peace of mind !
          </Text>
        </View>
        <View className="mx-5 mb-2">
          <TouchableOpacity className="bg-[#f73c4f] rounded-md py-4 mb-3">
            <Text className="text-center text-white text-base font-semibold">
              Log in
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSignUp}
            className="border-2 border-[#f73c4f] rounded-md py-4 mb-3"
          >
            <Text className="text-center text-base font-semibold">Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AuthScreen;
