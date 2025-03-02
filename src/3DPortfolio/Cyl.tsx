import { useRef } from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import img from "/assets/3dprotimg.png";

const Cyl: React.FC = () => {
  const tex = useTexture(img);
  const cyl = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (cyl.current) {
      cyl.current.rotation.y += delta;
    }
  });

  return (
    <group rotation={[0, 1.4, 0.5]}>
      <mesh ref={cyl}>
        <cylinderGeometry args={[1, 1, 1, 70, 70, true]} />
        <meshStandardMaterial map={tex} side={THREE.DoubleSide} transparent />
      </mesh>
    </group>
  );
};

export default Cyl;
