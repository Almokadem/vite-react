/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Bryan (https://sketchfab.com/BryanSanchinolo)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/security-camera-7da2489681d749fda57ffdf1db9f0419
Title: Security Camera
*/

import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

const Camera=(props)=> {
    const { nodes, materials } = useGLTF('/models/camera/security_camera/camera.gltf')
    const cameraRef=useRef();

    useFrame(()=>{
        if(cameraRef.current){
            cameraRef.current.rotation.y+=0.004;
        }
    });
    return (
        <group ref={cameraRef} {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.SecurityCameraBase_Team3_Sanchez_SecurityCameraBase_0.geometry}
                material={materials.Team3_Sanchez_SecurityCameraBase}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.SecurityCameraBase_Team3_Sanchez_SecurityCameraBolt_0.geometry}
                material={materials.Team3_Sanchez_SecurityCameraBolt}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.SecurityCamera_Team3_Sanchez_SecurityCameraBase_0.geometry}
                material={materials.Team3_Sanchez_SecurityCameraBase}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.SecurityCamera_Team3_Sanchez_SecuruityCameraLens_0.geometry}
                material={materials.Team3_Sanchez_SecuruityCameraLens}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.SecurityCamera_Team3_Sanchez_SecurityCameraBolt_0.geometry}
                material={materials.Team3_Sanchez_SecurityCameraBolt}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.SecurityCamera_Team3_Sanchez_SecuirtyCameraOnButton_0.geometry}
                material={materials.Team3_Sanchez_SecuirtyCameraOnButton}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.SecurityCamera_lambert1_0.geometry}
                material={materials.lambert1}
            />
        </group>
    )
}

useGLTF.preload('/models/camera/security_camera/camera.gltf')
export default Camera;