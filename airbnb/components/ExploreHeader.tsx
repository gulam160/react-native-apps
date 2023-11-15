import { ScrollView, StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useRef, useState } from "react";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import tw from "tailwind-react-native-classnames";
import SafeAndroidView from "@/Styles/SafeViewAndroid";
import * as Haptics from "expo-haptics";

const categories = [
  {
    name: "Tiny homes",
    icon: "home",
  },
  {
    name: "Cabins",
    icon: "house-siding",
  },
  {
    name: "Trending",
    icon: "local-fire-department",
  },
  {
    name: "Play",
    icon: "videogame-asset",
  },
  {
    name: "City",
    icon: "apartment",
  },
  {
    name: "Beachfront",
    icon: "beach-access",
  },
  {
    name: "Countryside",
    icon: "nature-people",
  },
];

interface ExploreHeaderProps {
  onCategoryChanged: (category: string) => void;
}

const ExploreHeader = ({ onCategoryChanged }: ExploreHeaderProps) => {
  const itemRef = useRef<Array<TouchableOpacity | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const selectCategory = (index: number) => {
    setActiveIndex(index);

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onCategoryChanged(categories[index].name);
  };

  return (
    <SafeAreaView
      style={[tw`bg-white shadow-md`, SafeAndroidView.AndroidSafeArea]}
    >
      <View
        style={[
          tw`flex-row justify-between items-center px-5 mb-4`,
          { gap: 10 },
        ]}
      >
        <Link
          href={"/(modals)/booking"}
          style={[
            tw`shadow-md rounded-full p-2.5 bg-white`,
            {
              width: 290,
              borderWidth: StyleSheet.hairlineWidth,
              borderColor: Colors.grey,
            },
          ]}
        >
          <TouchableOpacity style={[tw`flex-row items-center`, { width: 280 }]}>
            <Ionicons name="search" size={24} />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontFamily: "mon-sb" }}>Where to?</Text>
              <Text style={{ fontFamily: "mon", color: Colors.grey }}>
                Anywhere . Any week
              </Text>
            </View>
          </TouchableOpacity>
        </Link>
        <TouchableOpacity style={[tw`p-3 border border-gray-400 rounded-full`]}>
          <Ionicons name="options-outline" size={24} />
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 30,
          alignItems: "center",
          paddingHorizontal: 16,
        }}
      >
        {categories.map((items, index) => (
          <TouchableOpacity
            key={index}
            ref={(el) => (itemRef.current[index] = el)}
            style={
              activeIndex === index
                ? styles.categoriesBtnActive
                : styles.categoriesBtn
            }
            onPress={() => selectCategory(index)}
          >
            <MaterialIcons
              name={items.icon as any}
              size={24}
              color={activeIndex === index ? "#000" : Colors.grey}
            />
            <Text
              style={
                activeIndex === index
                  ? styles.categoryTextActive
                  : styles.categoryText
              }
            >
              {items.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ExploreHeader;

const styles = StyleSheet.create({
  categoryText: {
    fontSize: 14,
    fontFamily: "mon-sb",
    color: Colors.grey,
  },
  categoryTextActive: {
    fontSize: 14,
    fontFamily: "mon-sb",
    color: "#000",
  },
  categoriesBtn: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 8,
  },
  categoriesBtnActive: {
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "#000",
    borderBottomWidth: 2,
    paddingBottom: 8,
  },
});
