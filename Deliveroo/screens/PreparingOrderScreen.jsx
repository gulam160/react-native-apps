import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import React, { useEffect } from "react";
import { Platform, SafeAreaView, View } from "react-native";
import * as Animatable from "react-native-animatable";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);

  return (
    <SafeAreaView
      className={`${
        Platform.OS === "android" ? "pt-5" : "pt-0"
      } bg-[#00CCBB] flex-1 justify-center items-center px-4`}
    >
      <Animatable.Image
        source={require("../assets/orderLoading.gif")}
        animation="zoomIn"
        iterationCount={1}
        className="h-96 w-96"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-white text-lg text-center font-bold"
      >
        Waiting for Restaurants to accept your order!
      </Animatable.Text>

      <View className="items-center mt-5">
        <LottieView
          source={require("../assets/spinner.json")}
          autoPlay
          loop
          className="h-20 w-20"
        />
      </View>
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
