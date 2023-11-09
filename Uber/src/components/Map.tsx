import React, { useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import tw from "tailwind-react-native-classnames";
import { getTravellTime } from "../../APIs/DirectionMatrix";
import type { DirectionsApiResponse } from "../../Types/DistanceResponse";
import {
  OrgAndDesType,
  selectDestination,
  selectOrigin,
  setTravellTimeInformation,
} from "../../redux/slices/navSlice";
import { useAppDispatch, useAppSelector } from "../../redux/strore";

const Map = () => {
  const origin = useAppSelector(selectOrigin);
  const destination = useAppSelector(selectDestination);
  const mapRef = useRef<MapView | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!origin && !destination) {
      return;
    }
    mapRef.current?.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, left: 50, bottom: 50, right: 50 },
    });
  }, [origin, destination]);

  useEffect(() => {
    if (!origin && !destination) return;

    const distanceMatrixResponse = async () => {
      let res: DirectionsApiResponse = await getTravellTime(
        origin as OrgAndDesType,
        destination as OrgAndDesType
      );
      dispatch(setTravellTimeInformation(res.rows[0].elements[0]));
    };
    distanceMatrixResponse();
  }, [origin, destination]);

  return (
    <MapView
      ref={mapRef}
      mapType="mutedStandard"
      style={tw`flex-1`}
      initialRegion={{
        latitude: (origin as OrgAndDesType)?.location.lat,
        longitude: (origin as OrgAndDesType)?.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey="oxFG1UOc7fwDda1LPmVVYWXTBwGhp78sczmop3C5VZyvXWGZdZUHw67wiqDY1aHs"
          strokeWidth={3}
        />
      )}
      {origin && (
        <Marker
          coordinate={{
            latitude: origin?.location.lat,
            longitude: origin?.location.lng,
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
