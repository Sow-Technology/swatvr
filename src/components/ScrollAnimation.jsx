import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, PerspectiveCamera, Environment } from "@react-three/drei";
import * as THREE from "three";
import { ScrollParallax } from "react-just-parallax";
import Notification from "./Notification";
import Notification2 from "./Notification2";
import SparklesText from "./ui/sparkles-text";

function HeadsetModel({ scroll, scrollDivider }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/2.glb");
  const [opacity, setOpacity] = useState(1);

  const rotationControls = {
    startRotation: new THREE.Vector3(0.2, -0.5, 0),
    frontRotation: new THREE.Vector3(-0.66, 3.1416, 0.886),
    lensRotation: new THREE.Vector3(0, 3.1416, 0),
    zoomSpeed: 8,
    zoomStart: 0.8,
    fadeStart: 0.8,
  };

  useFrame(() => {
    if (group.current) {
      const scrollProgress = Math.min(scroll / scrollDivider, 1);

      if (scrollProgress < 0.4) {
        group.current.rotation.setFromVector3(
          new THREE.Vector3().lerpVectors(
            rotationControls.startRotation,
            rotationControls.frontRotation,
            scrollProgress / 0.4
          )
        );
      } else if (scrollProgress < rotationControls.zoomStart) {
        group.current.rotation.setFromVector3(
          new THREE.Vector3().lerpVectors(
            rotationControls.frontRotation,
            rotationControls.lensRotation,
            (scrollProgress - 0.4) / (rotationControls.zoomStart - 0.4)
          )
        );
      } else {
        group.current.rotation.setFromVector3(rotationControls.lensRotation);

        const zoomProgress = Math.min(
          (scrollProgress - rotationControls.zoomStart) /
            (1 - rotationControls.zoomStart),
          1
        );
        const zoom = 1 + zoomProgress * rotationControls.zoomSpeed;
        group.current.scale.setScalar(zoom);
      }

      // Calculate opacity based on scroll progress
      if (scrollProgress > rotationControls.fadeStart) {
        const fadeProgress =
          (scrollProgress - rotationControls.fadeStart) /
          (1 - rotationControls.fadeStart);
        setOpacity(1 - fadeProgress);
      } else {
        setOpacity(1);
      }
    }
  });

  return (
    <group ref={group}>
      {Object.keys(nodes).map((nodeName) => {
        const node = nodes[nodeName];
        if (node.isMesh) {
          return (
            <mesh
              key={nodeName}
              geometry={node.geometry}
              position={node.position}
              rotation={node.rotation}
              scale={node.scale}
            >
              <meshStandardMaterial
                {...materials[node.material.name]}
                transparent
                opacity={opacity}
              />
            </mesh>
          );
        }
        return null;
      })}
    </group>
  );
}

export default function ScrollAnimation() {
  const [scroll, setScroll] = useState(0);
  const scrollDivider = 3000; // You can adjust this value to control the overall animation speed

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScroll(scrollPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const modelOpacity = Math.max(
    0,
    Math.min(1, 1 - (scroll / scrollDivider - 0.8) / 0.2)
  );
  const videoOpacity = 1 - modelOpacity;

  return (
    <div
      style={{ height: "600vh", position: "relative" }}
      className="bg-slate-50"
    >
      <div className="fixed inset-0 z-0 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className="font-bold text-neutral-950 text-6xl top-32 absolute text-center text-balance mx-auto max-w-5xl">
          <SparklesText text="Step Into Another Dimension: Rent Your VR Adventure Today" />
        </div>
        <ScrollParallax isAbsolutelyPositioned>
          <Notification
            className="hidden absolute right-10 bottom-1/3 w-[18rem] xl:flex"
            title="Our Happy customers"
          />
        </ScrollParallax>
        <ScrollParallax isAbsolutelyPositioned>
          <Notification2
            className="hidden absolute left-10 top-2/3 w-[18rem] xl:flex"
            title="Explore, Play, and Learn! Rent the Best VR Gear Here"
          />
        </ScrollParallax>
        <div style={{ width: "100%", height: "100vh", position: "relative" }}>
          <Canvas style={{ opacity: modelOpacity }}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <ambientLight intensity={0.7} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              intensity={1}
            />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            <HeadsetModel scroll={scroll} scrollDivider={scrollDivider} />
            <Environment preset="studio" />
          </Canvas>
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: videoOpacity,
            }}
          >
            <source src="/vr.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

useGLTF.preload("/2.glb");
