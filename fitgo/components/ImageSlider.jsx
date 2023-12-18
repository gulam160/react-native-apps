import { sliderImage } from "@/constants";
import React from "react";
import { View } from "react-native";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const ImageSlider = () => {
  return (
    <Carousel
      data={sliderImage}
      loop={true}
      autoplay={true}
      hasParallaxImages={true}
      renderItem={renderItem}
      sliderWidth={wp(100)}
      firstItem={1}
      autoplayInterval={4000}
      itemWidth={wp(100) - 70}
      slideStyle={{ display: "flex", alignItems: "center" }}
    />
  );
};

const renderItem = ({ item }, parallaxProps) => (
  <View style={{ width: wp(100) - 70, height: hp(25) }}>
    <ParallaxImage
      source={item}
      containerStyle={{ borderRadius: 30, flex: 1 }}
      style={{ resizeMode: "contain" }}
      parallaxFactor={1}
      {...parallaxProps}
    />
  </View>
);

export default ImageSlider;
