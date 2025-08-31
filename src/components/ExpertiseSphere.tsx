"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const ExpertiseSphere = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Create particle sphere
    const particleCount = 120;
    const particles: THREE.Mesh[] = [];
    const geometry = new THREE.SphereGeometry(1, 16, 16);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ffff });

    for (let i = 0; i < particleCount; i++) {
      const particle = new THREE.Mesh(geometry, material);
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = 2 * Math.PI * Math.random();
      const radius = 20;
      particle.position.set(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );
      scene.add(particle);
      particles.push(particle);
    }

    // Optional: rotating group
    const group = new THREE.Group();
    particles.forEach(p => group.add(p));
    scene.add(group);

    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      group.rotation.y += 0.002;
      group.rotation.x += 0.001;

      renderer.render(scene, camera);
    };
    animate();

    // Handle resizing
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      scene.clear();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative"
    ></div>
  );
};

export default ExpertiseSphere;
