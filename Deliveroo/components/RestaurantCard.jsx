import { TouchableOpacity, Image, View, Text } from "react-native";
import React from "react";
import { MapPinIcon } from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({
  id,
  title,
  imgUrl,
  rating,
  genre,
  address,
  dishes,
  long,
  lat,
  description,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Restaurant", {
          id,
          title,
          imgUrl,
          rating,
          genre,
          address,
          dishes,
          long,
          lat,
          description,
        });
      }}
      className="bg-white mr-3 shadow-sm"
    >
      <Image source={{ uri: imgUrl }} className="h-36 w-64 rounded-sm" />
      <View className="px-3 pb-4">
        <Text className="text-lg font-bold pt-2">{title}</Text>
        <View className="flex-row items-center gap-x-1">
          <StarIcon size={22} opacity={0.5} color="green" />
          <Text className="text-gray-600 text-xs">
            <Text className="text-green-600">{rating}</Text> . {genre}
          </Text>
        </View>
        <View className="flex-row items-center gap-x-1">
          <MapPinIcon color="green" size={22} opacity={0.4} />
          <Text className="text-gray-600 text-xs">Nearby . {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
