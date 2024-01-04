import { sliderImage } from "@/constants";
import React from "react";
import { View } from "react-native";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

interface RenderItems {
  item: any;
}

const ImageSlider = () => {
  return (
    <Carousel
      data={sliderImage}
      loop={true}
      autoplay={true}
      hasParallaxImages={true}
      renderItem={({ item, index }) => <Items item={item} />}
      sliderWidth={wp(100)}
      firstItem={1}
      autoplayInterval={4000}
      itemWidth={wp(100) - 70}
      slideStyle={{ display: "flex", alignItems: "center" }}
    />
  );
};

const Items: React.FC<RenderItems> = (props) => (
  <View style={{ width: wp(100) - 70, height: hp(25) }}>
    <ParallaxImage
      source={props.item}
      containerStyle={{ borderRadius: 30, flex: 1 }}
      style={{ resizeMode: "contain" }}
      parallaxFactor={1}
      {...props}
    />
  </View>
);

export default ImageSlider;
