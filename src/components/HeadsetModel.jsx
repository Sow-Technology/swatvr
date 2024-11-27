import React, { useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

function HeadsetModel({ scroll, modelPath }) {
  const group = useRef();
  const { nodes, materials } = useGLTF(modelPath);
  const [opacity, setOpacity] = useState(1);
  const { viewport } = useThree();

  const rotationControls = {
    startRotation: new THREE.Vector3(0.2, -0.5, 0),
    frontRotation: new THREE.Vector3(-0.66, 3.1416, 0.886),
    lensRotation: new THREE.Vector3(0, 3.1416, 0),
    zoomSpeed: 8,
    scrollDivider: 3000,
    zoomStart: 0.6,
    fadeStart: 0.8,
  };

  useEffect(() => {
    if (group.current) {
      // Calculate bounding box of the model
      const box = new THREE.Box3().setFromObject(group.current);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());

      // Calculate scale to fit the model within the viewport
      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = 75; // Default camera FOV
      const fovRad = (fov / 2) * (Math.PI / 180);
      const distance = 5; // Distance from camera to center of scene
      const maxSize = Math.tan(fovRad) * distance * 2;
      const scale = maxSize / maxDim;

      // Apply scale and center the model
      group.current.scale.setScalar(scale);
      group.current.position.sub(center.multiplyScalar(scale));
    }
  }, [nodes]);

  useFrame(() => {
    if (group.current) {
      const scrollProgress = Math.min(
        scroll / rotationControls.scrollDivider,
        1
      );

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
        group.current.scale.setScalar(group.current.scale.x * zoom);

        if (scrollProgress > rotationControls.fadeStart) {
          const fadeProgress =
            (scrollProgress - rotationControls.fadeStart) /
            (1 - rotationControls.fadeStart);
          setOpacity(1 - fadeProgress);
        }
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

export default HeadsetModel;
