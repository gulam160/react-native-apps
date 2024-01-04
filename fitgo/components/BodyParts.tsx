import { bodyParts } from "@/constants";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

type BodyPartsProps = {};

type BodyPartCardProps = {
  item: { name: string; image: any };
  index: number;
  router: ReturnType<typeof useRouter>;
};

const BodyParts: React.FC<BodyPartsProps> = () => {
  const router = useRouter();

  return (
    <View className="mx-4">
      <Text
        style={{
          fontFamily: "mon-sb",
          fontSize: hp(3),
          paddingBottom: 6,
        }}
      >
        Exercises
      </Text>
      <FlatList
        data={bodyParts}
        keyExtractor={(item) => item.name}
        renderItem={({ item, index }) => (
          <BodyPartCard item={item} index={index} router={router} />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 10 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
      />
    </View>
  );
};

const BodyPartCard: React.FC<BodyPartCardProps> = ({ item, router }) => {
  return (
    <View className="mx-auto my-3">
      <TouchableOpacity
        onPress={() => router.push({ pathname: "/exercises", params: item })}
        className="flex justify-end"
      >
        <Image
          source={item.image}
          resizeMode="cover"
          className="w-[150px] h-[180px] rounded-[20px]"
        />
        <View
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          className="p-2 absolute w-full bottom-0 right-0 left-0 rounded-b-[20px]"
        >
          <Text
            className="text-white text-center text-base tracking-wider"
            style={{ fontFamily: "mon-sb" }}
          >
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BodyParts;
