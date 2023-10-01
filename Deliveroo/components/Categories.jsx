import React from "react";
import { ScrollView, Text } from "react-native";
import CategoriesCard from "./CategoriesCard";
import { Categories_Data } from "../constants/Categories_Data";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {Categories_Data &&
        Categories_Data.map(({ img, title, bg }) => (
          <CategoriesCard key={bg} img={img} title={title} background={bg} />
        ))}
        
    </ScrollView>
  );
};

export default Categories;
