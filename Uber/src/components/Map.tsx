import React, { useRef, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import { selectDestination, selectOrigin } from "../../redux/slices/navSlice";
import { useAppSelector } from "../../redux/strore";
import MapViewDirections from "react-native-maps-directions";

const Map = () => {
  const origin = useAppSelector(selectOrigin);
  const destination = useAppSelector(selectDestination);
  const mapRef = useRef<MapView | null>(null);

  useEffect(() => {
    if (!origin.location.lat && !destination) {
      return;
    }
    mapRef.current?.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, left: 50, bottom: 50, right: 50 },
    });
  }, [origin.location.lat, destination]);

  return (
    <MapView
      ref={mapRef}
      mapType="mutedStandard"
      style={tw`flex-1`}
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin.location.lat && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey=""
          strokeWidth={3}
        />
      )}
      {origin.location.lat && origin.location.lng && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Destination"
          description={origin.description}
          identifier="Destination"
        />
      )}
    </MapView>
  );
};

export default Map;
