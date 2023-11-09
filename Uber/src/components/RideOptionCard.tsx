import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";
import SafeAreaView from "react-native-safe-area-view";
import tw from "tailwind-react-native-classnames";
import { Icon, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Navigation } from "./NavOptions";
import { useAppSelector } from "../../redux/strore";
import { selectTravellTimeInformation } from "../../redux/slices/navSlice";
import type { Elements } from "../../Types/DistanceResponse";
import {
  RideOptions,
  rideOptions as data,
} from "../../constants/rideOptionCardData";

const SURGE_CHARGE_RATE = 5.59;

const RideOptionCard = () => {
  const navigation: Navigation = useNavigation();
  const [selected, setSelected] = useState<RideOptions | null>(null);
  const travellTimeInformation = useAppSelector(selectTravellTimeInformation);

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NaviagateCard")}
          style={tw`absolute top-5 left-5 rounded-full`}
        >
          <Icon name="chevron-left" type="fontawesome" size={26} />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>
          Select a Ride - {travellTimeInformation?.distance?.text}
        </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { image, title, multiplier, id }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row justify-between items-center px-6 ${
              id === (selected as RideOptions)?.id ? "bg-gray-200" : ""
            }`}
          >
            <Image
              source={{ uri: image }}
              style={{
                width: 90,
                height: 90,
                resizeMode: "contain",
              }}
            />
            <View style={tw`-ml-3`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>
                {(travellTimeInformation as Elements)?.duration?.text}
              </Text>
            </View>
            <Text style={tw`text-xl`}>
              {new Intl.NumberFormat("en-gb", {
                style: "currency",
                currency: "INR",
              }).format(
                ((travellTimeInformation as Elements)?.duration?.value *
                  SURGE_CHARGE_RATE *
                  multiplier) /
                  100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity
          disabled={selected === null}
          style={tw`bg-black py-3 m-3 ${
            selected === null ? "bg-gray-300" : ""
          }`}
        >
          <Text style={tw`text-center text-white`}>
            Choose {(selected as RideOptions)?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionCard;
