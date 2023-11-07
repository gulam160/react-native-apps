import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text, View } from "react-native";
import type { Navigation } from "../types/Navigation";
import { setItems } from "../utils/asyncStorage";

export const SkipButton = () => {
  const navigation: Navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Authenticate");
        setItems("_isOnboarded_", "YES");
      }}
      className="border border-[#f73c4f] rounded-md py-2 px-5 ml-5"
    >
      <Text className="text-[#f73c4f] font-bold">Skip</Text>
    </TouchableOpacity>
  );
};

export const NextButton = ({ ...props }) => {
  return (
    <TouchableOpacity
      className="border border-[#f73c4f] rounded-md py-2 px-5 mr-5"
      {...props}
    >
      <Text className="text-[#f73c4f] font-bold">Next</Text>
    </TouchableOpacity>
  );
};

export const DoneButton = () => {
  const navigation: Navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Authenticate");
        setItems("_isOnboarded_", "YES");
      }}
      className="bg-[#f73c4f] rounded-md py-2 px-5 mr-5"
    >
      <Text className="text-white font-bold">Done</Text>
    </TouchableOpacity>
  );
};

export const DotButtons = ({ selected }: { selected: boolean }) => {
  return (
    <View
      className={`w-4 h-4 mx-1 flex items-center justify-center rounded-full ${
        selected ? "border border-[#f73c4f]" : ""
      } p-0.5`}
    >
      <View
        className={`w-2 h-2 rounded-full ${
          selected ? "bg-[#f73c4f]" : "bg-[#c26f78]"
        }`}
      ></View>
    </View>
  );
};
