import React from "react";
import { ScrollView, Text, View } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ title, description, rowList }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between mx-4">
        <Text className="font-bold text-lg">{title}</Text>
        <Text>
          <ArrowRightIcon color="#00CCBB" size={25} />
        </Text>
      </View>
      <Text className="text-sm mx-4 text-gray-500">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {rowList &&
          rowList.map((el) => {
            return <RestaurantCard key={el.id} {...el} />;
          })}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
