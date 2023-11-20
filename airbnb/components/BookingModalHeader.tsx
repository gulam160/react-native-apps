import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const BookingModalHeader = () => {
  const router = useRouter();
  const [active, setActive] = useState(0);

  return (
    <SafeAreaView
      style={[
        tw`flex-row justify-center items-center border-b border-gray-200`,
        {
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight! : 0,
        },
      ]}
    >
      <TouchableOpacity
        onPress={() => router.back()}
        style={[
          tw`absolute left-5 bottom-4 z-50 bg-white p-0.5 rounded-full shadow-md`,
          {
            border: 1,
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: Colors.grey,
          },
        ]}
      >
        <Ionicons name="close-outline" size={28} />
      </TouchableOpacity>
      <View style={[tw`flex-row justify-center`, { gap: 15 }]}>
        <TouchableOpacity onPress={() => setActive(0)}>
          <Text
            style={[
              tw`text-lg py-5`,
              {
                fontFamily: "mon-sb",
                color: active === 0 ? "#000" : Colors.grey,
                textDecorationLine: active === 0 ? "underline" : "none",
              },
            ]}
          >
            Stays
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActive(1)}>
          <Text
            style={[
              tw`text-lg py-5`,
              {
                fontFamily: "mon-sb",
                color: active === 1 ? "#000" : Colors.grey,
                textDecorationLine: active === 1 ? "underline" : "none",
              },
            ]}
          >
            Experiences
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default BookingModalHeader;
