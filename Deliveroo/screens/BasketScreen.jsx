import { useNavigation } from "@react-navigation/native";
import React, { useMemo, useState } from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { XCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import deliveryBoy from "../assets/delivery_boy.png";
import { removeFromBasket } from "../redux/Basket/basket.action";

const BasketScreen = () => {
  const navigation = useNavigation();
  const { items } = useSelector((state) => state.basketReducer);
  const [groupedItemInBasket, setGroupedItemInBasket] = useState([]);
  const dispatch = useDispatch();

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemInBasket(groupedItems);
  }, [items]);

  const basketTotal = items
    .reduce((total, el) => {
      return total + Number(el.price);
    }, 0)
    .toFixed(2);

  return (
    <SafeAreaView
      className={`${
        Platform.OS === "android" ? "pt-5" : "pt-0"
      } flex-1 bg-white border-t border-gray-400`}
    >
      <View className="bg-gray-100 flex-1 rounded">
        <View className="p-5 border-b border-[#00ccbb] rounded bg-white shadow-xl">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">Summary</Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute top-5 right-5"
          >
            <XCircleIcon color="#00ccbb" height={50} width={50} />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center justify-between gap-x-4 bg-white p-4 my-5">
          <Image
            source={deliveryBoy}
            className="h-9 w-9 bg-gray-400 p-4 rounded-full"
          />
          <Text className="flex-1">Delivery in 50-70 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00ccbb]">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-300">
          {Object.entries(groupedItemInBasket).map(([key, items]) => {
            return (
              <View
                key={key}
                className="flex-row items-center space-x-3 bg-white py-2 px-4"
              >
                <Text className="px-4 text-[#00ccbb] text-base">
                  {items.length}x
                </Text>
                <Image
                  source={{ uri: items[0].image }}
                  className="h-12 w-12 rounded-full"
                />
                <Text className="flex-1">{items[0].name}</Text>
                <Text>$ {items[0].price}</Text>
                <TouchableOpacity>
                  <Text
                    className="text-[#00ccbb]"
                    onPress={() =>
                      dispatch(removeFromBasket({ id: items[0].id }))
                    }
                  >
                    Remove
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>

        <View className="p-4 mt-5 bg-white space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">$ {basketTotal}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">$ 5.99</Text>
          </View>
          <View className="flex-row justify-between">
            <Text>Order Total</Text>
            <Text className="font-extrabold">$ {parseFloat(basketTotal) + 5.99}</Text>
          </View>
          <TouchableOpacity
            className="rounded-lg bg-[#00ccbb] p-4"
            onPress={() => navigation.navigate("Preparingorder")}
          >
            <Text className="text-lg text-white text-center font-bold">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
