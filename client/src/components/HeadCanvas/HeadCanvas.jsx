import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useLoader, useThree } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense } from 'react';
import './model.css';


const Light = () => {
   return (
     <>
       <ambientLight intensity={0.1} />
       <directionalLight position={[40, 10, 5]} intensity={0.2} />
       <directionalLight
         castShadow
         position={[10, 420, 100]}
         intensity={1.3}
         shadow-mapSize-width={1024}
         shadow-mapSize-height={1024}
         shadow-camera-far={10}
         shadow-camera-left={-30}
         shadow-camera-right={10}
         shadow-camera-top={40}
         shadow-camera-bottom={-10}
       />
       <spotLight intensity={0.5} position={[90, 100, 50]} castShadow />
     </>
   );
 };

const Light2 = () => {
  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight position={[0, 0, 0]} intensity={2.0}/>
      <pointLight
        castShadow
        position={[0, 0, 0]}
        intensity={1.3}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={10}
        shadow-camera-left={-30}
        shadow-camera-right={10}
        shadow-camera-top={40}
        shadow-camera-bottom={-10}
      />
      <spotLight intensity={0.01} position={[90, 100, 50]} castShadow />
    </>
  );
};

const Model = () => {
   const { viewport } = useThree();
   const gltf = useLoader(GLTFLoader, '../client/assets/3d/genhead.gltf');

   let ref = useRef();

   useFrame(({ mouse }) => {
      const x = (mouse.x * viewport.width) / 30
      const y = (mouse.y * viewport.height) / 30
      // ref.current.position.set(x, y, 0)
      ref.current.rotation.set(-y, x, 0)
    })

   return (
      <mesh ref={ref}>
         <primitive object={gltf.scene} scale={0.65} />
      </mesh>
   );
};

function HeadCanvas() {
   return (
      <div className='HeadCanvas mx-auto mt-5 p-0'>
         <Canvas>
            <Suspense fallback={null}>
               <OrbitControls enableZoom={false} />
               <Environment files='../../client/assets/3d/env.hdr' />
               <Light />
               <Model position={[0, 0, 0]} />
               <Light2 />
            </Suspense>
         </Canvas>
      </div>
   );
}

export default HeadCanvas