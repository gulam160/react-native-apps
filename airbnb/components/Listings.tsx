import {
  FlatList,
  Image,
  ListRenderItem,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import type { ListingsInterface } from "@/interfaces/listing";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import tw from "tailwind-react-native-classnames";
import Animated, { FadeInLeft, FadeInRight } from "react-native-reanimated";

interface ListingsProps {
  listings: ListingsInterface[];
  category: string;
}

const Listings = ({ listings, category }: ListingsProps) => {
  const [loading, setLoading] = useState(false);
  const listRef = useRef<FlatList>(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [category]);

  const renderRow: ListRenderItem<ListingsInterface> = ({ item }) => (
    <Link href={`/listing/${item.id}`} asChild>
      <TouchableOpacity style={tw`p-3 mb-3 shadow-sm bg-white`}>
        <Animated.View entering={FadeInRight} exiting={FadeInLeft}>
          <View>
            <Image
              source={{ uri: item.medium_url }}
              style={tw`w-full h-72 rounded-md`}
            />
            <TouchableOpacity style={tw`absolute top-4 right-5`}>
              <Ionicons name="heart-outline" size={24} color="#000" />
            </TouchableOpacity>
          </View>

          <View style={tw`flex-row justify-between mt-2`}>
            <Text style={[tw`text-base`, { fontFamily: "mon-sb" }]}>
              {item.name.length > 30
                ? `${item.name.substring(0, 26)}...`
                : item.name}
            </Text>
            <View style={[tw`flex-row items-center`, { gap: 3 }]}>
              <Ionicons name="star" size={15} />
              <Text style={{ fontFamily: "mon-sb" }}>
                {item.review_scores_rating / 20}
              </Text>
            </View>
          </View>

          <Text style={{ fontFamily: "mon", marginVertical: 4 }}>
            {item.room_type}
          </Text>

          <View style={[tw`flex-row`, { gap: 4 }]}>
            <Text style={{ fontFamily: "mon-sb" }}>
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
              }).format(item.price * 54.11)}
            </Text>
            <Text style={{ fontFamily: "mon" }}>night</Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={loading ? [] : listings}
      renderItem={renderRow}
      ref={listRef}
    />
  );
};

export default Listings;
