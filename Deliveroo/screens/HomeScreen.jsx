import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import SafeAndroidView from "../Styles/SafeViewAndroid";
import deliveryBoy from "../assets/delivery_boy.png";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { useState, useEffect } from "react";
import { shuffleData } from "../Utils/ShuffleFeatureList";
import { FeaturedRowData } from "../constants/FeaturedRow_Data";


const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredDataList, setFeaturedDataList] = useState([])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    const arr = FeaturedRowData;
    const n = FeaturedRowData.length;
    const shuffledData = shuffleData(arr, n);
    setFeaturedDataList(shuffledData);
  }, [shuffleData, FeaturedRowData]);

  return (
    <SafeAreaView style={SafeAndroidView.AndroidSafeArea} className="bg-white">
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={deliveryBoy}
          className="h-10 w-10 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
          <View className="flex-row items-center gap-x-1">
            <Text className="font-bold text-xl">Current Location</Text>
            <Text className="mt-1">
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>
        </View>
        <UserIcon size={30} color="#00CCBB" />
      </View>

      <View className="flex-row items-center pb-2 mx-4 space-x-2">
        <View className="flex-row flex-1 items-center space-x-2 bg-gray-300 p-3 rounded-sm">
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput
            placeholder="Restaurants & cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" size={25} />
      </View>

      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <Categories />
        <FeaturedRow
          id={1}
          title="Offers near you!"
          description="Why not support your local restaurants tonight"
          rowList={featuredDataList[0]}
        />
        <FeaturedRow
          id={2}
          title="Featured"
          description="Paid placements from our partners"
          rowList={featuredDataList[1]}
        />
        <FeaturedRow
          id={3}
          title="Tasty discounts"
          description="You can get amazing discounts on your orders"
          rowList={featuredDataList[2]}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
