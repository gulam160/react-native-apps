import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Kütle: THREE.Mesh;
    Alt_kaynak: THREE.Mesh;
    Minderü: THREE.Mesh;
    Bağlantılar: THREE.Mesh;
    Ayaklar: THREE.Mesh;
    Sweep: THREE.Mesh;
  };
  materials: {
    Mavi: THREE.MeshStandardMaterial;
    ["Gold - Sculpture"]: THREE.MeshStandardMaterial;
    ["Mavi.1"]: THREE.MeshStandardMaterial;
  };
};

export default function LillyChair(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    require("../assets/Model/chair.glb")
  ) as GLTFResult;
  return (
    <group {...props} dispose={null} scale={5.2} position={[0, -2, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Kütle.geometry}
        material={materials.Mavi}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Alt_kaynak.geometry}
        material={materials["Gold - Sculpture"]}
        position={[0, 0.389, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Minderü.geometry}
        material={materials.Mavi}
        position={[0, 0.431, -0.066]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bağlantılar.geometry}
        material={materials["Gold - Sculpture"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ayaklar.geometry}
        material={materials["Gold - Sculpture"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sweep.geometry}
        material={materials["Mavi.1"]}
      />
    </group>
  );
}

useGLTF.preload(require("../assets/Model/chair.glb"));
