import React from "react";
import { Image, TouchableOpacity, StyleSheet, Text } from "react-native";

const CategoriesCard = ({ img, title, background }) => {
  return (
    <TouchableOpacity style={[styles.card, { backgroundColor: background }]}>
      <Image source={img} style={styles.image} />
      <Text style={[styles.title, {backgroundColor : background}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems : "center",
    position : "relative",
    borderRadius: 5,
    width: 100,
    height: 100,
    marginRight: 14
  },
  image: {
    width: 90,
    height: 90,
  },
  title: {
    position: "absolute",
    bottom : 8,
    left : 8,
    color : "white",
    fontWeight : "bold",
    paddingHorizontal : 5,
    paddingVertical : 1,
    borderRadius: 5
  }
});

export default CategoriesCard;
