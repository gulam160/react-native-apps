import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, removeFromBasket } from "../redux/Basket/basket.action";

const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);
  const { items } = useSelector((state) => state.basketReducer);
  const dispatch = useDispatch();

  const incrementBasketItems = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

  const decrementBasketItems = () => {
    if (!items.length > 0) return;

    dispatch(removeFromBasket({ id }));
  };

  const selectedBasketItemsWithId = items.filter((el) => el.id === id);

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white p-4 ${
          isPressed ? "border-b-0" : "border-b"
        } border-gray-200`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg font-semibold mb-1">{name}</Text>
            <Text className="text-gray-400 text-[14px]">{description}</Text>
            <Text className="text-gray-400 text-[14px] mt-2">${price}</Text>
          </View>
          <View>
            <Image
              source={{ uri: image }}
              style={{ borderWidth: 1, borderColor: "#f3f3f4" }}
              className="h-20 w-20 bg-gray-300 p-4 mt-2"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4 pb-4">
          <View className="flex-row items-center gap-x-2">
            <TouchableOpacity
              onPress={decrementBasketItems}
              disabled={!items.length}
            >
              <MinusCircleIcon
                size={40}
                color={selectedBasketItemsWithId.length > 0 ? "#00ccbb" : "gray"}
              />
            </TouchableOpacity>
            <Text>{selectedBasketItemsWithId.length}</Text>
            <TouchableOpacity onPress={incrementBasketItems}>
              <PlusCircleIcon size={40} color="#00ccbb" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
