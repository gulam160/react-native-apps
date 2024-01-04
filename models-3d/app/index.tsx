import { View, Text, StyleSheet } from "react-native";
import React, { Suspense } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Canvas } from "@react-three/fiber/native";
import useControls from "r3f-native-orbitcontrols";
import BioMechMutants from "components/BioMechMutant";

const index = () => {
  const [OrbitalControls, events] = useControls();

  return (
    <SafeAreaView className="flex-1 bg-gray-white gap-y-1">
      <View className="flex-1" {...events}>
        <Canvas>
          <OrbitalControls enablePan={false} />
          <directionalLight position={[1, 0, 0]} args={["white", 5]} />
          <directionalLight position={[-1, 0, 0]} args={["white", 5]} />
          <directionalLight position={[0, 1, 0]} args={["white", 5]} />
          <directionalLight position={[0, -1, 0]} args={["white", 5]} />
          <directionalLight position={[0, 0, 1]} args={["white", 5]} />
          <directionalLight position={[0, 0, -1]} args={["white", 5]} />
          <Suspense fallback={null}>
            <BioMechMutants />
          </Suspense>
        </Canvas>
      </View>
      <View
        style={{ borderWidth: StyleSheet.hairlineWidth, borderColor: "gray" }}
        className="w-full h-[40%] p-4 bg-white border-gray-500 rounded-t-2xl shadow-md"
      >
        <View>
          <Text
            style={{ fontFamily: "mon-b" }}
            className="text-2xl text-gray-600"
          >
            Bio-Mechanical 3D Model
          </Text>
          <Text
            style={{ fontFamily: "mon-sb" }}
            className="text-xl text-rose-500 mt-3 mb-2"
          >
            By Gulam Mustafa
          </Text>
          <Text
            style={{ fontFamily: "mon-sb" }}
            className="text-base text-gray-500 text-justify"
          >
            This is a Bio-Mechanical Mutant 3D model crafted in Blender 3.3.
            Designed it to give you a visually captivating appearance to
            showcase my creativity and meticulous craftsmanship in this
            technological world.
          </Text>

          <Text
            style={{ fontFamily: "mon-sb" }}
            className="text-base text-gray-500 mt-2 text-justify"
          >
            <Text className="text-rose-500">Tech Stack Used</Text>: Three.js,
            Expo, React Native, Typescript, Nativewind
          </Text>
          <Text
            style={{ fontFamily: "mon-sb" }}
            className="text-base text-gray-500 mt-2 text-justify"
          >
            <Text style={{ fontFamily: "mon-b" }} className="text-rose-500">
              Tools
            </Text>
            : Android Studio & VS Code
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
