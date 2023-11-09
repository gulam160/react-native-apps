import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { selectOrigin } from "../../redux/slices/navSlice";
import { useAppSelector } from "../../redux/strore";
import { navOptionData as data } from "../../constants/navOptionData";

export interface Navigation {
  navigate: (routeName: string) => void;
}

const NavOptions = () => {
  const navigation: Navigation = useNavigation();
  const origin = useAppSelector(selectOrigin);

  return (
    <FlatList
      style={tw`mx-auto`}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[tw`p-4 bg-gray-100 m-2 w-40`, { height: 260 }]}
          onPress={() => navigation.navigate(item.screen)}
          disabled={!origin}
        >
          <View style={tw`${!origin ? "opacity-20" : "opacity-100"}`}>
            <Image
              source={item.image}
              style={{
                width: 120,
                height: 120,
                resizeMode: "contain",
                margin: "auto",
              }}
            />
            <Text style={tw`mt-2 text-lg font-semibold text-center`}>
              {item.title}
            </Text>
            <Icon
              style={tw`p-2 bg-black my-4 rounded-full w-10 mx-auto`}
              type="antdesign"
              name="arrowright"
              color="white"
            />
          </View>
        </TouchableOpacity>
      )}
      horizontal
    />
  );
};

export default NavOptions;
