import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import SafeAndroidView from "../styles/SafeViewAndroid";
import { Navigation } from "../types/Navigation";
import { removeItems } from "../utils/asyncStorage";
import { ChevronLeftIcon, BellIcon } from "react-native-heroicons/solid";
import {
  MagnifyingGlassCircleIcon,
  StopIcon,
  MapPinIcon,
} from "react-native-heroicons/outline";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  const navigation: Navigation = useNavigation();

  return (
    <View>
      <StatusBar style="light" />
      <View
        style={SafeAndroidView.AndroidSafeArea}
        className="bg-[#f73c4f] rounded-b-2xl py-6"
      >
        {/* Child-1 */}
        <View className="px-2 pb-6 flex-row justify-between items-center">
          <TouchableOpacity>
            <ChevronLeftIcon size={24} color="rgb(243 244 246)" />
          </TouchableOpacity>
          <Text className="text-xl text-gray-100 font-semibold">
            Estimate Shipping
          </Text>
          <TouchableOpacity>
            <BellIcon size={28} color="rgb(243 244 246)" />
          </TouchableOpacity>
        </View>

        {/* Child-2 */}
        <View className="mx-4">
          {/* 1st input */}
          <View className="flex-row items-center pb-2 space-x-3">
            <StopIcon color="rgb(243 244 246)" size={25} />
            <View className="flex-row flex-1 justify-between items-center space-x-2 bg-gray-100 p-3 rounded-md">
              <TextInput placeholder="Pickup" keyboardType="default" />
              <MagnifyingGlassCircleIcon size={24} color="gray" />
            </View>
          </View>
          {/* 2nd input */}
          <View className="flex-row items-center py-2 space-x-3">
            <MapPinIcon color="rgb(243 244 246)" size={25} />
            <View className="flex-row flex-1 justify-between items-center space-x-2 bg-gray-100 p-3 rounded-md">
              <TextInput placeholder="Delivery" keyboardType="default" />
              <MagnifyingGlassCircleIcon size={24} color="gray" />
            </View>
          </View>
          {/*  */}
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
