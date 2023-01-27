import logo from './logo.svg';
import { Sky } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';
import { useState, useRef } from 'react';
import styles from './index.css'

function Box(props){
  
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  //useFrame((state, delta) => (ref.current.rotation.x += 0.01))

  return(
    <mesh {...props}
    ref={ref}
    scale={clicked ? 1.5 : 1}
    onClick={(event) => click(!clicked)}
    onPointerOver={(event) => hover(true)}
    onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]}/>
      <meshLambertMaterial attach="material" color="hotpink"/>
    </mesh>
  )
}

export default function App() {
  return (
    <div>
      <input type='text'></input>
      <Canvas>
        <OrbitControls></OrbitControls>
        <ambientLight intensity={0.5}></ambientLight>
        <Sky sunPosition={[100,100,20]}></Sky>
        <Box position={[-1.2, 0, 0]}></Box>
        <Box position={[1.2, 0, 0]}></Box>
      </Canvas>
    </div>
  );
}
