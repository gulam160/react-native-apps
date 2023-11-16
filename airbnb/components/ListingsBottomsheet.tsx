import React, { useMemo, useRef, useState } from "react";
import { ListingsInterface } from "@/interfaces/listing";
import BottomSheet from "@gorhom/bottom-sheet";
import Listings from "./Listings";
import Colors from "@/constants/Colors";
import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";

interface ListingBottomSheet {
  listings: ListingsInterface[];
  category: string;
}

const ListingsBottomsheet = ({ category, listings }: ListingBottomSheet) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["10%", "100%"], []);
  const [refresh, setRefresh] = useState(0);

  const showMap = () => {
    bottomSheetRef.current?.collapse();
    setRefresh(refresh + 1);
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      index={1}
      handleIndicatorStyle={{ backgroundColor: Colors.grey }}
    >
      <View style={tw`flex-1`}>
        <Listings listings={listings} category={category} refresh={refresh} />
        <View style={tw`absolute bottom-10 w-full items-center`}>
          <TouchableOpacity
            onPress={showMap}
            style={[
              tw`flex-row items-center bg-black px-6 py-4 z-50 rounded-full shadow-md`,
              { gap: 5 },
            ]}
          >
            <Text style={{ fontFamily: "mon-sb", color: "#fff" }}>Map</Text>
            <Ionicons name="map-outline" size={20} color={"#fff"} />
          </TouchableOpacity>
        </View>
      </View>
    </BottomSheet>
  );
};

export default ListingsBottomsheet;
