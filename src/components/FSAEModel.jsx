import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useState } from "react";
import { motion } from "framer-motion";

const FSAEModel = () => {
  const { scene } = useGLTF("/models/fsae_pedal.glb");
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="h-96"
      animate={{ scale: hovered ? 1.1 : 1, rotate: hovered ? 5 : 0 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <directionalLight position={[0, 5, 5]} />
          <primitive object={scene} />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </motion.div>
  );
};

export default FSAEModel;

