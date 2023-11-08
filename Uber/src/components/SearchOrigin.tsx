import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import type { OriginTypes } from "../../Types/originquery";
import { useDebounce } from "../../hooks/useDebounce";
import tw from "tailwind-react-native-classnames";
import { SearchOriginSuggetion } from "../../APIs/originsuggetion";
import { useAppDispatch } from "../../redux/strore";
import { setDestination, setOrigin } from "../../redux/slices/navSlice";

const SearchOrigin = () => {
  const [result, setResult] = useState<OriginTypes[]>();
  const [query, setQuery] = useState<string>("");
  const debounceQuery = useDebounce(query, 500);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        let res = await SearchOriginSuggetion(query.trim());
        setResult(res);
      } catch (error) {
        console.log((error as Error).message);
      }
    };
    getData();
  }, [debounceQuery]);

  return (
    <View>
      <TextInput
        style={[
          tw`border-b border-gray-200`,
          { fontSize: 17, paddingVertical: 2, marginBottom: 15 },
        ]}
        placeholder="Where from?"
        value={query}
        onChangeText={(text) => setQuery(text)}
      />
      {query && result ? (
        result.length > 0 ? (
          <View style={tw`px-2 mb-2 drop-shadow-md`}>
            {result.map(({ name, country, state, lon, lat }) => {
              return (
                <TouchableOpacity
                  key={lon}
                  style={tw`mb-2`}
                  onPress={() => {
                    dispatch(
                      setOrigin({
                        location: { lat: lat, lng: lon },
                        description: "Here we got you",
                      })
                    );
                    setQuery(`${name}, ${state}, ${country}`);
                  }}
                >
                  <Text style={tw`text-base`}>
                    {name}, {country}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ) : (
          <Text style={tw`text-gray-400 px-2 mb-3`}>{""}</Text>
        )
      ) : null}
    </View>
  );
};

export default SearchOrigin;
