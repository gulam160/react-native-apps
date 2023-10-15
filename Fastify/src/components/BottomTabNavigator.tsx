import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import React from "react";
import {
  HomeIcon as HomeOutline,
  ArchiveBoxIcon as PackageOutline,
  MapPinIcon as TrackOutline,
  UserCircleIcon as UserOutline,
} from "react-native-heroicons/outline";
import {
  HomeIcon as HomeSolid,
  ArchiveBoxIcon as PackageSolid,
  MapPinIcon as TrackSolid,
  UserCircleIcon as UserSolid,
} from "react-native-heroicons/solid";
import { Home, Package, Profile, Track } from "../screens";

const Tab = createBottomTabNavigator();

const screenOptions: BottomTabNavigationOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    height: 70,
  },
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <HomeSolid size={26} color="#f73c4f" />
            ) : (
              <HomeOutline size={26} color="#f73c4f" opacity={0.6} />
            ),
        }}
      />
      <Tab.Screen
        name="Packages"
        component={Package}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <PackageSolid size={26} color="#f73c4f" />
            ) : (
              <PackageOutline size={26} color="#f73c4f" opacity={0.6} />
            ),
        }}
      />
      <Tab.Screen
        name="Track"
        component={Track}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <TrackSolid size={26} color="#f73c4f" />
            ) : (
              <TrackOutline size={26} color="#f73c4f" opacity={0.6} />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <UserSolid size={26} color="#f73c4f" />
            ) : (
              <UserOutline size={26} color="#f73c4f" opacity={0.6} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
