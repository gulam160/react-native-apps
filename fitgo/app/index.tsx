import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import Animated, { FadeInDown, FadeOut } from "react-native-reanimated";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();

  return (
    <View className="flex-1 flex justify-end">
      <StatusBar style="light" />
      <Image
        source={require("@/assets/images/welcome.png")}
        className="w-full h-full absolute"
      />
      <LinearGradient
        colors={["transparent", "#18181b"]}
        style={{ width: wp(100), height: hp(70) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className="flex justify-end p-12 space-y-8"
      >
        <Animated.View
          entering={FadeInDown.delay(100).springify()}
          className="flex items-center"
        >
          <Text
            className="text-white tracking-wide"
            style={{ fontFamily: "mon-sb", fontSize: hp(4) }}
          >
            Best <Text className="text-rose-500">Workouts</Text>
          </Text>
          <Text
            className="text-white tracking-wide"
            style={{ fontFamily: "mon-sb", fontSize: hp(4) }}
          >
            For you
          </Text>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200).springify()}>
          <TouchableOpacity
            onPress={() => router.push("/home")}
            className="bg-rose-500 flex items-center py-3 mx-auto w-full rounded-full border-2 border-neutral-200"
          >
            <Text
              className="text-white"
              style={{ fontFamily: "mon-sb", fontSize: hp(3) }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
};

export default index;
