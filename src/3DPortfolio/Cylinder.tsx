import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
} from "@react-three/postprocessing";
import Cyl from "./Cyl";


const Cylinder = () => {
  return (
    <Canvas className="shifted-canvas">
      <ambientLight />
      <OrbitControls />
      <Cyl />
      <EffectComposer>
        <Bloom
          intensity={2.0}
          
        />
      </EffectComposer>
    </Canvas>
  );
};

export default Cylinder;
