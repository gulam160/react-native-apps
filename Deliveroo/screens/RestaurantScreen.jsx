import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useLayoutEffect } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { useDispatch } from "react-redux";
import { setRestaurants } from "../redux/Restaurants/restaurants.action";

const RestaurantScreen = () => {
  const dispatch = useDispatch();
  const {
    params: {
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
    },
  } = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(
      setRestaurants({
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
      })
    );
  }, [dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <BasketIcon />

      <ScrollView>
        <View className="relative">
          <Image
            source={{ uri: imgUrl }}
            className="w-full h-60 bg-gray-500 p-4"
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-14 left-5 bg-white rounded-full p-2"
          >
            <ArrowLeftIcon size={20} color="#00CCBB" fontWeight="bold" />
          </TouchableOpacity>
        </View>

        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="font-bold text-3xl">{title}</Text>
            <View className="flex-row gap-x-1 my-1">
              <View className="flex-row items-center gap-x-2">
                <StarIcon size={22} opacity={0.4} color="#00CCBB" />
                <Text className="text-xs text-gray-500">
                  <Text className="text-[#00CCBB]">{rating}</Text>. {genre}
                </Text>
              </View>
              <View className="flex-row items-center gap-x-2">
                <MapPinIcon size={22} opacity={0.4} color="#00CCBB" />
                <Text className="text-xs text-gray-500">
                  Nearby . {address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 text-[14px] mt-2 pb-4 text-justify">
              {description}
            </Text>
          </View>
          <TouchableOpacity className="flex-row space-x-2 p-4 items-center border-y border-gray-300">
            <QuestionMarkCircleIcon color="gray" opacity={0.5} size={25} />
            <Text className="font-bold text-md pl-2 flex-1">
              Have a food allergy?
            </Text>
            <ChevronRightIcon color="#00CCBB" />
          </TouchableOpacity>
        </View>

        <View className="pb-36">
          <Text className="p-4 pt-6 font-bold text-xl">Menu</Text>
          {dishes && dishes.map((el) => <DishRow key={el.id} {...el} />)}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
