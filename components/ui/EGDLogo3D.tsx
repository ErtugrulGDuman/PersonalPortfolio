"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Sparkles } from "@react-three/drei";
import { useEffect, useState, useRef } from "react";
import * as THREE from "three";

function RotatingStars() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        if (groupRef.current) {
            // Slow rotation for the background
            groupRef.current.rotation.y -= delta * 0.05;
            groupRef.current.rotation.x -= delta * 0.02;
        }
    });

    return (
        <group ref={groupRef}>
            <Stars radius={50} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <Sparkles count={100} scale={10} size={2} speed={0.4} opacity={0.5} color="#ffffff" />
        </group>
    );
}

export default function EGDLogo3D() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="w-full h-full absolute inset-0 -z-10 bg-slate-950">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <RotatingStars />
            </Canvas>
        </div>
    );
}
