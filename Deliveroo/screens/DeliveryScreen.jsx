import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Communications from "react-native-communications";
import { XMarkIcon } from "react-native-heroicons/outline";
import MapView, { Marker } from "react-native-maps";
import * as Progress from "react-native-progress";
import { useSelector } from "react-redux";
import SafeAndroidView from "../Styles/SafeViewAndroid";
import delivery from "../assets/delivery.jpeg";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const { restaurant } = useSelector((state) => state.restaurantReducer);

  const { lat, long, address, genre } = restaurant;

  return (
    <View className="bg-[#00ccbb] flex-1">
      <SafeAreaView style={SafeAndroidView.AndroidSafeArea} className="z-50">
        <View className="flex-row justify-between items-center py-4 px-4">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon size={30} color="white" />
          </TouchableOpacity>
          <Text className="text-lg text-white font-light">Order Help</Text>
        </View>

        <View className="mx-5 rounded-md bg-white my-2 p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-3xl font-bold my-2">45-55 minutes</Text>
            </View>
            <Image source={delivery} className="h-16 w-16 bg-white" />
          </View>
          <Progress.Bar size={30} color="#00ccbb" indeterminate={true} />
          <Text className="mt-2.5">Your order is being prepared</Text>
        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
          latitude: lat,
          longitude: long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 -mt-14 z-20"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{ latitude: lat, longitude: long }}
          title={address}
          description={`Welcome! We are preparing ${genre} disheh`}
          identifier="origin"
          pinColor="red"
          tappable={true}
        />
      </MapView>

      <SafeAreaView className="bg-white flex-row items-center gap-x-5 h-28 px-5">
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/6199/6199944.png",
          }}
          className="w-12 h-12 bg-inherit rounded-full ml-5"
        />
        <View className="flex-1">
          <Text className="text-lg">Gulam Mustafa</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            const countryCode = "+91";
            const phoneNumber = "9555616014";
            Communications.phonecall(`${countryCode}${phoneNumber}`, true);
          }}
        >
          <Text className="text-[#00ccbb] mr-5 text-lg font-bold">Call</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
