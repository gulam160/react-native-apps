import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import ImageSlider from "@/components/ImageSlider";

const home = () => {
  return (
    <SafeAreaView className="flex-1 bg-white flex space-y-5" edges={["top"]}>
      <StatusBar style="dark" />

      <View className="flex-row justify-between items-center mx-4">
        <View className="space-y-2">
          <Text
            style={{ fontFamily: "mon", fontSize: hp(4.5) }}
            className="font-bold tracking-wider text-neutral-700"
          >
            READY TO
          </Text>
          <Text
            style={{ fontFamily: "mon", fontSize: hp(4.5) }}
            className="font-bold tracking-wider text-rose-500"
          >
            WORKOUT
          </Text>
        </View>
        <View className="flex-col justify-center items-center space-y-2">
          <Image
            source={require("@/assets/images/avatar.png")}
            className="h-11 w-11 rounded-full"
          />
          <View className="h-11 w-11 bg-neutral-200 rounded-full flex justify-center items-center">
            <Ionicons name="ios-notifications" size={32} color="gray" />
          </View>
        </View>
      </View>

      <View className="">
        <ImageSlider />
      </View>
    </SafeAreaView>
  );
};

export default home;
