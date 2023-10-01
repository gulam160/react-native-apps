import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

const BasketIcon = () => {
  const { items } = useSelector((state) => state.basketReducer);
  const navigation = useNavigation();

  const basketTotal = items.reduce((total, el) => {
    return total + Number(el.price);
  }, 0).toFixed(2);

  if(items.length === 0) return null

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket", { modal: true })}
        className="bg-[#00ccbb] mx-5 p-4 rounded-lg flex-row items-center justify-around"
      >
        <Text className="font-bold text-white rounded text-lg bg-[#01a296] py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-lg font-extrabold text-white">
          $ {basketTotal}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
