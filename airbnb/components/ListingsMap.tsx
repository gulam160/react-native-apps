import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapView from "react-native-map-clustering";
import type { GeolistingData } from "@/interfaces/listing.geo";
import { useRouter } from "expo-router";
import tw from "tailwind-react-native-classnames";
import Colors from "@/constants/Colors";

interface ListingMapProp {
  listingMapData: any;
}

const initRegion = {
  latitude: -33.8688,
  longitude: 151.2093,
  latitudeDelta: 10,
  longitudeDelta: 10,
};

const ListingsMap = ({ listingMapData }: ListingMapProp) => {
  const geoList: GeolistingData[] = listingMapData.features;
  const router = useRouter();

  const onMarkerSelected = (item: GeolistingData) => {
    router.push(`/listing/${item.properties.id}`);
  };

  const renderCluster = (cluster: any) => {
    const { id, geometry, properties, onPress } = cluster;
    const points = properties.point_count;

    return (
      <Marker
        key={`cluster-${id}`}
        onPress={onPress}
        coordinate={{
          longitude: geometry.coordinates[0],
          latitude: geometry.coordinates[1],
        }}
      >
        <View
          style={tw`bg-white p-2 rounded-full shadow-md items-center justify-center`}
        >
          <Text style={{ fontFamily: "mon-sb" }}>{points}</Text>
        </View>
      </Marker>
    );
  };

  return (
    <MapView
      animationEnabled={false}
      style={StyleSheet.absoluteFill}
      provider={PROVIDER_GOOGLE}
      showsUserLocation
      showsMyLocationButton
      initialRegion={initRegion}
      clusterColor={Colors.grey}
      clusterFontFamily="mon-sb"
      renderCluster={renderCluster}
    >
      {geoList &&
        geoList.map((item) => (
          <Marker
            onPress={() => onMarkerSelected(item)}
            key={item.properties.id}
            coordinate={{
              latitude: Number(item.properties.latitude),
              longitude: Number(item.properties.longitude),
            }}
          >
            <View
              style={tw`bg-white p-2 rounded-full shadow-md items-center justify-center`}
            >
              <Text style={{ fontFamily: "mon-sb" }}>
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                }).format(item.properties.price * 54.11)}
              </Text>
            </View>
          </Marker>
        ))}
    </MapView>
  );
};

export default React.memo(ListingsMap);
