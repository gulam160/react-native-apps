import { defaultStyle } from "@/Styles/defaultStyle";
import { guestsGropus } from "@/assets/data/guestGroup";
import { places } from "@/assets/data/places";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import DatePicker from "react-native-modern-datepicker";
import Animated, {
  FadeIn,
  FadeOut,
  SlideInDown,
} from "react-native-reanimated";
import tw from "tailwind-react-native-classnames";

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

const Page = () => {
  const router = useRouter();
  const [openCard, setOpenCard] = useState(0);
  const [selectedPlace, setSelectedPlace] = useState(0);
  const [group, setGuestGroup] = useState(guestsGropus);

  const today = new Date().toISOString().substring(0, 10);

  const clearAll = () => {
    setOpenCard(0);
    setSelectedPlace(0);
    setGuestGroup(guestsGropus);
  };

  return (
    <BlurView intensity={70} tint="light" style={tw`flex-1 pt-28`}>
      <ScrollView>
        <View style={styles.card}>
          {openCard !== 0 && (
            <AnimatedTouchableOpacity
              onPress={() => setOpenCard(0)}
              style={styles.cardPreview}
              entering={FadeIn.delay(200)}
              exiting={FadeOut.delay(200)}
            >
              <Text style={styles.previewText}>Where</Text>
              <Text style={styles.previewDate}>I am flexible</Text>
            </AnimatedTouchableOpacity>
          )}
          {openCard === 0 && (
            <>
              <Animated.Text entering={FadeIn} style={styles.cardHeader}>
                Where to?
              </Animated.Text>
              <Animated.View style={styles.cardBody}>
                <View
                  style={[
                    tw`flex-row items-center content-center bg-white border border-gray-400 rounded-md mb-6`,
                    { height: 50, gap: 10 },
                  ]}
                >
                  <Ionicons name="ios-search" size={20} style={tw`ml-2`} />
                  <TextInput
                    style={[tw`flex-1 text-base`, { fontFamily: "mon" }]}
                    placeholder="Search destination"
                    placeholderTextColor={Colors.grey}
                  />
                </View>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{ gap: 25 }}
                >
                  {places &&
                    places.map((item, index) => (
                      <TouchableOpacity
                        key={index}
                        onPress={() => setSelectedPlace(index)}
                      >
                        <Image
                          source={item.img}
                          style={
                            selectedPlace === index
                              ? styles.placeSelected
                              : styles.place
                          }
                        />
                        <Text
                          style={{
                            fontFamily:
                              selectedPlace === index ? "mon-sb" : "mon",
                            marginTop: 4,
                          }}
                        >
                          {item.title}
                        </Text>
                      </TouchableOpacity>
                    ))}
                </ScrollView>
              </Animated.View>
            </>
          )}
        </View>
        <View style={styles.card}>
          {openCard !== 1 && (
            <AnimatedTouchableOpacity
              onPress={() => setOpenCard(1)}
              style={styles.cardPreview}
              entering={FadeIn.delay(200)}
              exiting={FadeOut.delay(200)}
            >
              <Text style={styles.previewText}>When</Text>
              <Text style={styles.previewDate}>Any week</Text>
            </AnimatedTouchableOpacity>
          )}
          {openCard === 1 && (
            <>
              <Animated.Text entering={FadeIn} style={styles.cardHeader}>
                When's your trip?
              </Animated.Text>
              <Animated.View style={styles.cardBody}>
                <DatePicker
                  current={today}
                  selected={today}
                  mode="calendar"
                  options={{
                    defaultFont: "mon",
                    headerFont: "mon-sb",
                    borderColor: "transparent",
                    mainColor: Colors.primary,
                  }}
                />
              </Animated.View>
            </>
          )}
        </View>
        <View style={styles.card}>
          {openCard !== 2 && (
            <AnimatedTouchableOpacity
              onPress={() => setOpenCard(2)}
              style={styles.cardPreview}
              entering={FadeIn.delay(200)}
              exiting={FadeOut.delay(200)}
            >
              <Text style={styles.previewText}>Who</Text>
              <Text style={styles.previewDate}>Add guests</Text>
            </AnimatedTouchableOpacity>
          )}
          {openCard === 2 && (
            <>
              <Animated.Text entering={FadeIn} style={styles.cardHeader}>
                Who's coming?
              </Animated.Text>
              <Animated.View style={styles.cardBody}>
                {group &&
                  group.map((item, index) => (
                    <View
                      key={index}
                      style={[
                        styles.guestItems,
                        index + 1 < guestsGropus.length
                          ? styles.itemsBorder
                          : null,
                      ]}
                    >
                      <View>
                        <Text style={{ fontSize: 14, fontFamily: "mon-sb" }}>
                          {item.name}
                        </Text>
                        <Text style={{ fontSize: 14, fontFamily: "mon" }}>
                          {item.text}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          gap: 10,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <TouchableOpacity
                          onPress={() => {
                            const newGroups = [...guestsGropus];
                            if (newGroups[index].count === 0) return;
                            newGroups[index].count--;
                            setGuestGroup(newGroups);
                          }}
                          disabled={group[index].count === 0}
                        >
                          <Ionicons
                            name="remove-circle-outline"
                            size={30}
                            color={
                              group[index].count > 0 ? Colors.grey : "#cdcdcd"
                            }
                          />
                        </TouchableOpacity>
                        <Text
                          style={{
                            fontFamily: "mon",
                            fontSize: 16,
                            textAlign: "center",
                          }}
                        >
                          {item.count}
                        </Text>
                        <TouchableOpacity
                          onPress={() => {
                            const newGroups = [...guestsGropus];
                            newGroups[index].count++;
                            setGuestGroup(newGroups);
                          }}
                        >
                          <Ionicons
                            name="add-circle-outline"
                            size={30}
                            color={Colors.grey}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  ))}
              </Animated.View>
            </>
          )}
        </View>
      </ScrollView>

      {/* Footer */}
      <Animated.View
        style={defaultStyle.footer}
        entering={SlideInDown.delay(200)}
      >
        <View style={tw`flex-row justify-between items-center`}>
          <TouchableOpacity onPress={clearAll}>
            <Text
              style={[
                tw`text-lg`,
                { fontFamily: "mon-sb", textDecorationLine: "underline" },
              ]}
            >
              Clear all
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.back()}
            style={[tw`flex-row pl-3 pr-5`, { ...defaultStyle.btn, gap: 10 }]}
          >
            <Ionicons name="search-outline" size={24} color={"#fff"} />
            <Text style={defaultStyle.btnText}>Search</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </BlurView>
  );
};

export default Page;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    margin: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    gap: 20,
  },
  previewText: {
    fontFamily: "mon-sb",
    fontSize: 14,
    color: Colors.grey,
  },
  previewDate: {
    fontFamily: "mon-sb",
    fontSize: 14,
    color: Colors.grey,
  },
  cardPreview: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  cardHeader: {
    fontFamily: "mon-b",
    fontSize: 24,
    padding: 20,
  },
  cardBody: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  place: {
    width: 100,
    height: 100,
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.grey,
  },
  placeSelected: {
    width: 100,
    height: 100,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.grey,
  },
  guestItems: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
  },
  itemsBorder: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBlockColor: Colors.grey,
  },
});
