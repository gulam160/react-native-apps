import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Share,
} from "react-native";
import Animated, {
  SlideInDown,
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";
import React, { useLayoutEffect } from "react";
import listingsData from "@/assets/data/airbnb-listings.json";
import type { ListingsInterface } from "@/interfaces/listing";
import { useLocalSearchParams, useNavigation } from "expo-router";
import tw from "tailwind-react-native-classnames";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { defaultStyle } from "@/Styles/defaultStyle";

const IMG_HEIGHT = 300;
const { width } = Dimensions.get("window");

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const detail = (listingsData as ListingsInterface[]).find(
    (el) => el.id === id
  );
  const navigation = useNavigation();

  const shareListing = async () => {
    try {
      await Share.share({ title: detail?.name, url: detail?.listing_url! });
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT, IMG_HEIGHT],
            [-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollOffset.value, [0, IMG_HEIGHT / 1.5], [0, 1]),
    };
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerTransparent: true,
      headerBackground: () => (
        <Animated.View
          style={[headerAnimatedStyle, styles.header]}
        ></Animated.View>
      ),
      headerRight: () => (
        <View style={styles.bar}>
          <TouchableOpacity
            style={[tw`shadow-md`, styles.roundButton]}
            onPress={shareListing}
          >
            <Ionicons name="share-outline" size={24} color={"#000"} />
          </TouchableOpacity>
          <TouchableOpacity style={[tw`shadow-md`, styles.roundButton]}>
            <Ionicons name="heart-outline" size={22} color={"#000"} />
          </TouchableOpacity>
        </View>
      ),
      headerLeft: () => (
        <TouchableOpacity
          style={[tw`shadow-md`, styles.roundButton]}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={24} color={"#000"} />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        ref={scrollRef}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        scrollEventThrottle={16}
      >
        <Animated.Image
          source={{ uri: detail?.xl_picture_url }}
          style={[styles.image, imageAnimatedStyle]}
          resizeMode="cover"
        />

        <View style={styles.infoContainer}>
          <Text style={styles.name}>{detail?.name}</Text>
          <Text style={styles.location}>{detail?.smart_location}</Text>
          <Text style={styles.rooms}>
            {detail?.guests_included} guests · {detail?.bedrooms} bedrooms ·{" "}
            {detail?.beds} beds · {detail?.bathrooms} bathrooms
          </Text>
          <View style={[tw`flex-row`, { gap: 4 }]}>
            <Ionicons name="star" size={16} />
            <Text style={styles.ratings}>
              {detail?.review_scores_rating! / 20}
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.hostView}>
            <Image
              source={{ uri: detail?.host_picture_url }}
              style={styles.host}
            />
            <View>
              <Text style={tw`text-base font-normal`}>
                Hosted by {detail?.host_name}
              </Text>
              <Text>Host since {detail?.host_since}</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <Text style={styles.description}>{detail?.description}</Text>
        </View>
      </Animated.ScrollView>

      <Animated.View
        style={defaultStyle.footer}
        entering={SlideInDown.delay(200)}
      >
        <View style={tw`flex-row justify-between items-center`}>
          <TouchableOpacity style={styles.footerText}>
            <Text style={styles.footerPrice}>
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
              }).format(detail?.price! * 54.11)}
            </Text>
            <Text style={{ fontFamily: "mon" }}>night</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[tw`px-7`, defaultStyle.btn]}>
            <Text style={defaultStyle.btnText}>Reserve</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    height: IMG_HEIGHT,
    width: width,
  },
  infoContainer: {
    padding: 24,
    backgroundColor: "#fff",
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    fontFamily: "mon-sb",
  },
  location: {
    fontSize: 18,
    marginTop: 10,
    fontFamily: "mon-sb",
  },
  rooms: {
    fontSize: 16,
    color: Colors.grey,
    marginVertical: 4,
    fontFamily: "mon",
  },
  ratings: {
    fontSize: 16,
    fontFamily: "mon-sb",
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.grey,
    marginVertical: 16,
  },
  host: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: Colors.grey,
  },
  hostView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  footerText: {
    height: "100%",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  footerPrice: {
    fontSize: 18,
    fontFamily: "mon-sb",
  },
  roundButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    color: Colors.primary,
  },
  bar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  header: {
    backgroundColor: "#fff",
    height: 100,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.grey,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    fontFamily: "mon",
  },
});
