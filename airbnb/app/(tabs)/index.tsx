import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";
import { Stack } from "expo-router";
import React, { useMemo, useState } from "react";
import { View } from "react-native";
import tw from "tailwind-react-native-classnames";
import listingsData from "@/assets/data/airbnb-listings.json";
import type { ListingsInterface } from "@/interfaces/listing";

const Page = () => {
  const [category, setCategory] = useState("Tiny homes");
  const data: ListingsInterface[] = useMemo(() => listingsData as any, []);

  const getChangedCategory = (category: string) => {
    setCategory(category);
  };

  return (
    <View style={tw`flex-1`}>
      <Stack.Screen
        options={{
          header: () => (
            <ExploreHeader onCategoryChanged={getChangedCategory} />
          ),
        }}
      />
      <Listings listings={data} category={category} />
    </View>
  );
};

export default Page;
